import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
  intersectionMockInstance,
  mockAllIsIntersecting,
  mockIsIntersecting,
} from 'react-intersection-observer/test-utils'
import Footer from './footer'

const FooterMock = {
  manageFilter: jest.fn(),
}

describe('Footer', () => {
  test('should render the Footer component with useInView', () => {
    mockAllIsIntersecting(true)
    render(<Footer tabActived="all" setPage={FooterMock.manageFilter} />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  test('should render the Footer component without useInView', () => {
    const { getByTestId } = render(<Footer tabActived="all" setPage={FooterMock.manageFilter} />)
    const footer = getByTestId('home-footer')
    // Access the `IntersectionObserver` instance for the wrapper Element.
    const instance = intersectionMockInstance(footer)

    expect(instance.observe).toHaveBeenCalledWith(footer)
  })
})
