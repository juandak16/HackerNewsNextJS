import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TabSelector from './tabSelector'

const TabSelectorMock = {
  tabActivated: 'all',
  setTabActivated: jest.fn(),
}

describe('TabSelector', () => {
  test('should render the TabSelector component', () => {
    render(
      <TabSelector tabActivated={TabSelectorMock.tabActivated} setTabActivated={TabSelectorMock.setTabActivated} />,
    )

    expect(screen.getByTestId('home-tab-selector')).toBeInTheDocument()
  })
})
