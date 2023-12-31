import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from './page'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { useApiCall } from './lib/data'
import { HOME_DATA } from './mocks/query/home'

jest.mock('./lib/data')

const response = {
  loading: false,
  data: HOME_DATA.data,
  error: undefined,
}

describe('Home', () => {
  test('should render the Home component', () => {
    mockAllIsIntersecting(true)
    jest.mocked(useApiCall).mockImplementation(() => response)

    act(() => {
      render(<Home />)
    })
  })

  test('change filterdropdown', () => {
    mockAllIsIntersecting(true)
    jest.mocked(useApiCall).mockImplementation(() => response)

    act(() => {
      render(<Home />)
    })

    userEvent.click(screen.getByTestId('select-filter'))
    setTimeout(() => {
      userEvent.click(screen.getByText('Reacts'))
    }, 500)
    setTimeout(() => {
      expect(screen.queryByText('Select your news')).toBeNull()
    }, 500)
  })

  test('fav postcard and faves view', () => {
    mockAllIsIntersecting(true)
    jest.mocked(useApiCall).mockImplementation(() => response)

    act(() => {
      render(<Home />)
    })

    userEvent.click(screen.getAllByTestId('home-post-card-heart')[0])
    setTimeout(() => {
      userEvent.click(screen.getByText('My faves'))
    }, 500)
  })

  test('fav postcard and unfav postcard', () => {
    mockAllIsIntersecting(true)
    jest.mocked(useApiCall).mockImplementation(() => response)

    act(() => {
      render(<Home />)
    })

    userEvent.click(screen.getAllByTestId('home-post-card-heart')[0])
    setTimeout(() => {
      userEvent.click(screen.getAllByTestId('home-post-card-heart')[0])
    }, 500)
  })
})
