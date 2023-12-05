import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ItemList from './itemList'
import { FAVES_DATA, HOME_DATA } from '@/app/mocks/query/home'

const ItemListMock = {
  data: HOME_DATA.data,
  faves: FAVES_DATA.data,
  setFaves: jest.fn(),
}

describe('ItemList', () => {
  test('should render the ItemList component default', () => {
    render(<ItemList data={ItemListMock.data} faves={ItemListMock.faves} setFaves={ItemListMock.setFaves} />)
    expect(screen.getAllByTestId('home-news-card')).toHaveLength(13)
  })
})
