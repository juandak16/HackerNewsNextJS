import { useEffect, useState } from 'react'
import { NEWS_TYPE, NewsType } from '../ui/FilterDropdown/constant'
import { NewsDataFormatted } from '../lib/types'
import { useApiCall } from '../lib/data'
import { LIMIT, TAB_ALL } from '../utils/home/constant'

export const useHome = () => {
  const [tabActived, setTabActived] = useState(TAB_ALL)
  const [typeSelected, setTypeSelected] = useState<NewsType | null>(null)
  const [faves, setFaves] = useState<NewsDataFormatted[]>([])
  const [page, setPage] = useState(0)
  const [data, setData] = useState<NewsDataFormatted[]>([])

  let response = useApiCall({ typeSelected: typeSelected?.value ?? '', page, limit: LIMIT })

  useEffect(() => {
    const indexSelect = NEWS_TYPE.findIndex((item) => item.value === localStorage.getItem('typeSelectedStorage'))
    setTypeSelected(NEWS_TYPE[indexSelect])
    setFaves(localStorage.getItem('favesStorage') ? JSON.parse(localStorage.getItem('favesStorage') ?? '') : [])
  }, [])

  useEffect(() => {
    if (response?.data) {
      let newArray = data.concat(response.data)

      setData([...new Set(newArray)])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response.data])

  return { tabActived, setTabActived, typeSelected, setTypeSelected, faves, setFaves, setPage, data, setData }
}
