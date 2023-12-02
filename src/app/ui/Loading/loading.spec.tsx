import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Loading } from './loading'

describe('Loading', () => {
  test('should render the Loading component', () => {
    render(<Loading />)

    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })
})
