'use client'
import React, { useEffect, useState } from 'react'
import TabSelector from './ui/TabSelector/tabSelector'
import FilterDropdown from './ui/FilterDropdown/filterDropdown'
import { useApiCall } from './lib/data'
import { NewsDataFormatted } from './lib/types'
import { NEWS_TYPE, NewsType } from './ui/FilterDropdown/data'
import Footer from './ui/Footer/footer'
import { LIMIT, TAB_ALL } from './utils/home/constants'
import { manageFilter } from './utils/home'
import ItemList from './ui/ItemList/itemList'

export default function Home() {
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

  return (
    <main className="max-w-xl md:max-w-7xl flex flex-col px-4 md:px-24 lg:px-36 mx-auto my-0">
      <TabSelector tabActivated={tabActived} setTabActivated={setTabActived} />
      <FilterDropdown
        manageFilter={(item: NewsType | null) => manageFilter({ item, setPage, setData, setTypeSelected })}
        typeSelected={typeSelected}
        isDisabled={tabActived !== TAB_ALL}
      />
      <div className="mx-auto pt-38 grid grid-cols-1 0 md:grid-cols-2 gap-x-10 gap-y-7">
        {tabActived === TAB_ALL ? ItemList({ data, faves, setFaves }) : ItemList({ data: faves, faves, setFaves })}
      </div>
      <Footer tabActived={tabActived} setPage={setPage} />
    </main>
  )
}
