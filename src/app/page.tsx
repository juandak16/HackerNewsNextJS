'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import TabSelector from './ui/TabSelector/tabSelector'
import FilterDropdown from './ui/FilterDropdown/filterDropdown'
import { useApiCall } from './lib/data'
import NewsCard from './ui/NewsCard/newsCard'
import { useInView } from 'react-intersection-observer'
import { Loading } from './ui/Loading/loading'
import { NewsDataFormatted } from './lib/types'
import { NEWS_TYPE, NewsType } from './ui/FilterDropdown/data'

const LIMIT = 8

export const getKey = (item: NewsDataFormatted) => {
  return `${item.created_at}-${item.author}`
}

export default function Home() {
  //get typeSelectedStorage index
  const [tabActived, setTabActived] = useState('all')
  const [typeSelected, setTypeSelected] = useState<NewsType | undefined>(undefined)
  const [faves, setFaves] = useState<NewsDataFormatted[]>([])
  const [page, setPage] = useState(0)
  const [data, setData] = useState<NewsDataFormatted[]>([])

  //data query, which is executed when the page or typeSelected changes.
  let response = useApiCall({ typeSelected: typeSelected?.value ?? '', page, limit: LIMIT })

  //implementation of the intersection observer
  const { ref, inView } = useInView({ trackVisibility: true, delay: 300 })

  useEffect(() => {
    const indexSelect = NEWS_TYPE.findIndex((item) => item.value === localStorage.getItem('typeSelectedStorage'))
    setTypeSelected(NEWS_TYPE[indexSelect])
    setFaves(localStorage.getItem('favesStorage') ? JSON.parse(localStorage.getItem('favesStorage') ?? '') : [])
  }, [])

  useEffect(() => {
    if (inView) setPage(page + 1)
  }, [inView])

  //concatenating new data
  useEffect(() => {
    if (response?.data) {
      let newArray = data.concat(response.data)

      setData([...new Set(newArray)])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response.data])

  //add or delete favorite stories
  const manageFave = (item: NewsDataFormatted) => {
    const exists = faves.find((fav) => getKey(fav) === getKey(item))
    let newArray = []

    if (exists) {
      newArray = faves.filter((fav) => getKey(fav) !== getKey(item))
      localStorage.setItem('favesStorage', JSON.stringify(newArray))
      setFaves(newArray)
    } else {
      newArray = [...faves, item]
      localStorage.setItem('favesStorage', JSON.stringify(newArray))
      setFaves([...faves, item])
    }
  }

  //change filter selected
  const manageFilter = (item: NewsType | null) => {
    if (item) {
      setPage(0)
      setData([])
      localStorage.setItem('typeSelectedStorage', item.value)
      setTypeSelected(item)
    }
  }

  return (
    <main className="max-w-xl md:max-w-7xl flex flex-col px-4 md:px-24 lg:px-36 mx-auto my-0">
      <TabSelector tabActivated={tabActived} setTabActivated={setTabActived} />
      <FilterDropdown manageFilter={manageFilter} typeSelected={typeSelected} isDisabled={tabActived !== 'all'} />
      <div className="mx-auto pt-38 grid grid-cols-1 0 md:grid-cols-2 gap-x-10 gap-y-7">
        {tabActived === 'all'
          ? data &&
            data?.map((item, index) => {
              return (
                <NewsCard
                  item={item}
                  key={`${index}-${item.author}`}
                  faved={faves.find((fav) => getKey(fav) === getKey(item)) ? true : false}
                  manageFave={manageFave}
                />
              )
            })
          : faves?.map((item, index) => {
              return (
                <NewsCard
                  item={item}
                  key={`${index}-${item.author}`}
                  faved={faves.find((fav) => getKey(fav) === getKey(item)) ? true : false}
                  manageFave={manageFave}
                />
              )
            })}
      </div>
      {tabActived === 'all' ? (
        <footer ref={ref} data-testid="home-footer">
          <Loading />
        </footer>
      ) : (
        <footer>
          <Loading />
        </footer>
      )}
    </main>
  )
}
