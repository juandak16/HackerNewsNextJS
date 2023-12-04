import { act, renderHook } from '@testing-library/react'
import { HOME_DATA, NEWS_DATA, NEWS_DATA_WITH_EMPTY_VALUES } from '../mocks/query/home'
import { formatData, getEndpoint, useApiCall } from './data' // Reemplaza 'yourFile' con la ruta correcta a tu archivo
import { NewsDataFormatted } from './types'

describe('formatData', () => {
  test('should format data correctly', () => {
    const mockNewsData = NEWS_DATA

    const formattedData = formatData(mockNewsData)
    expect(formattedData).toEqual([
      {
        author: 'TestAuthor',
        created_at: '2023-11-28',
        story_title: 'Test Title',
        story_url: 'https://testurl.com',
        story_id: '123',
      },
    ])
  })
  test('should return null for empty values', () => {
    const mockNewsData = NEWS_DATA_WITH_EMPTY_VALUES

    const formattedData = formatData(mockNewsData)
    expect(formattedData).toEqual([])
  })
})

describe('getEndpoint', () => {
  test('should return correct endpoint', () => {
    const requestData = {
      typeSelected: 'testType',
      page: 1,
      limit: 10,
    }

    const endpoint = getEndpoint(requestData)
    expect(endpoint).toBe('https://hn.algolia.com/api/v1/search_by_date?query=testType&page=1&hitsPerPage=10')
  })
})

describe('useApiCall', () => {
  it('should fetch data correctly', async () => {
    const mockData = NEWS_DATA

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    } as Response)

    let result: any

    await act(async () => {
      result = renderHook(() => useApiCall({ typeSelected: 'someType', page: 1, limit: 10 }))
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    const { result: hookResult } = result!
    const { loading, data, error } = hookResult.current

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith(
      'https://hn.algolia.com/api/v1/search_by_date?query=someType&page=1&hitsPerPage=10',
    )
    expect(loading).toBe(false)
    expect(error).toBeUndefined()
    expect(data).toEqual([
      {
        author: 'TestAuthor',
        created_at: '2023-11-28',
        story_id: '123',
        story_title: 'Test Title',
        story_url: 'https://testurl.com',
      },
    ])
  })

  it('should handle fetch error correctly', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Failed to fetch'))

    let result: any

    await act(async () => {
      result = renderHook(() => useApiCall({ typeSelected: 'someType', page: 1, limit: 10 }))
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    const { result: hookResult } = result!
    const { loading, data, error } = hookResult.current

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(loading).toBe(false)
    expect(data).toEqual([])
    expect(error).toEqual(new Error('Failed to fetch'))
  })
})
