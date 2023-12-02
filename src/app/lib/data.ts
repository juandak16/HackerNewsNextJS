'use client'
import { useEffect, useState } from 'react'
import { NewsData } from './interfaces'
import { NewsDataFormatted } from './types'

export const formatData = (data: NewsData) => {
  let dataFormated: NewsDataFormatted[] = []
  dataFormated = data?.hits
    ?.map((item) => {
      if (item.author && item.created_at && item.story_title && item.story_url) {
        const object = {
          author: item.author,
          created_at: item.created_at,
          story_title: item.story_title,
          story_url: item.story_url,
          story_id: item.story_id,
        }
        return object
      } else {
        return null
      }
    })
    .filter(Boolean) as NewsDataFormatted[]

  return dataFormated
}

type RequestData = {
  typeSelected: string
  page: number
  limit: number
}

const getEndpoint = ({ typeSelected, page, limit }: RequestData) => {
  return `https://hn.algolia.com/api/v1/search_by_date?${
    typeSelected ? `query=${typeSelected}` : ''
  }&page=${page}&hitsPerPage=${limit}`
}

export const useApiCall = ({ typeSelected, page, limit }: RequestData) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<NewsDataFormatted[]>([])
  const [error, setError] = useState<Error>()

  useEffect(() => {
    setLoading(true)
    //get endpoint url
    let endpoint = getEndpoint({ typeSelected, page, limit })

    fetch(endpoint)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa')
        }

        return response.json() as Promise<NewsData>
      })
      .then((data: NewsData) => {
        setData(formatData(data))
      })
      .catch((error: Error) => {
        setError(error)
        console.error('Error:', error)
      })

    setLoading(false)
  }, [typeSelected, page]) // eslint-disable-line react-hooks/exhaustive-deps

  return { loading, data, error }
}
