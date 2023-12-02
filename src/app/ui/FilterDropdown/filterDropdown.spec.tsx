import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FilterDropdown from './filterDropdown'

const FilterDropdownMock = {
  typeSelected: undefined,
  manageFilter: jest.fn(),
}

describe('FilterDropdown', () => {
  test('should render the FilterDropdown component empty', () => {
    render(
      <FilterDropdown typeSelected={FilterDropdownMock.typeSelected} manageFilter={FilterDropdownMock.manageFilter} />,
    )

    expect(screen.getByText('Select your news')).toBeInTheDocument()
  })
})
