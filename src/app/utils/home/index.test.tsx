import { NEWS_TYPE } from '@/app/ui/FilterDropdown/constant'
import { getKey, manageFave, manageFilter, manageFaveProps, manageFilterProps } from './index'

const mockItem = {
  author: 'superposeur',
  created_at: '2021-09-18T18:03:54.000Z',
  story_title: 'Teletransportation Paradox',
  story_url: 'https://www.wikipedia.org/wiki/Teletransportation_paradox',
  story_id: '28559571',
}

describe('getKey', () => {
  test('should return correct key', () => {
    const key = getKey(mockItem)
    expect(key).toBe(`${mockItem.created_at}-${mockItem.author}`)
  })
})

describe('manageFave', () => {
  test('should set favorite item', () => {
    const mockProps: manageFaveProps = {
      item: mockItem,
      faves: [],
      setFaves: jest.fn(),
    }

    // Test for adding an item to favorites
    manageFave(mockProps)
    expect(mockProps.setFaves).toHaveBeenCalledWith([mockItem])
  })

  test('should unset favorite item', () => {
    const mockProps: manageFaveProps = {
      item: mockItem,
      faves: [mockItem],
      setFaves: jest.fn(),
    }

    // Test for adding an item to favorites
    manageFave(mockProps)
    expect(mockProps.setFaves).toHaveBeenCalledWith([])
  })
})

describe('manageFilter', () => {
  test('should manage filters correctly', () => {
    const mockProps: manageFilterProps = {
      item: {
        value: NEWS_TYPE[0].value,
        label: NEWS_TYPE[0].label,
      },
      setPage: jest.fn(),
      setData: jest.fn(),
      setTypeSelected: jest.fn(),
    }

    manageFilter(mockProps)

    expect(mockProps.setPage).toHaveBeenCalledWith(0)
    expect(mockProps.setData).toHaveBeenCalledWith([])
    expect(mockProps.setTypeSelected).toHaveBeenCalledWith(mockProps.item)
  })
})
