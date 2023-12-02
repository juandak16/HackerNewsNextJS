interface HighlightResult {
  value: string
  matchLevel: string
  matchedWords: string[]
}

interface Hit {
  title: string
  url: string
  author: string
  points: number
  story_text: string | null
  comment_text: string | null
  _tags: string[]
  num_comments: number
  objectID: string
  story_title: string
  story_url: string
  story_id: string
  created_at: string
  _highlightResult: {
    title: HighlightResult
    url: HighlightResult
    author: HighlightResult
  }
}

export interface NewsData {
  hits: Hit[]
  page: number
  nbHits: number
  nbPages: number
  hitsPerPage: number
  processingTimeMS: number
  query: string
  params: string
}
