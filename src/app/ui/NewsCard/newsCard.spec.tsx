import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NewsCard from './newsCard'

const postCardMock = {
  faved: false,
  item: {
    author: 'Pedro',
    created_at: '2021-09-17T18:43:35.000Z',
    story_id: '28564021',
    story_title: 'A Go Package for Building Progressive Web Apps',
    story_url: 'https://go-app.dev/',
  },
  manageFave: jest.fn(),
}

describe('PostCard', () => {
  test('should render the PostCard component', () => {
    render(<NewsCard item={postCardMock.item} faved={postCardMock.faved} manageFave={postCardMock.manageFave} />)

    expect(screen.getByTestId('home-news-card')).toBeInTheDocument()
  })
})
