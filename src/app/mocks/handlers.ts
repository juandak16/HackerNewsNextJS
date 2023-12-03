import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://hn.algolia.com/api/v1/search_by_date', () => {
    // 2. Return a mocked "Response" instance from the handler.
    return HttpResponse.text('Hello world!')
  }),
]
