'use client'
import React from 'react'
import TabSelector from './ui/TabSelector/tabSelector'
import FilterDropdown from './ui/FilterDropdown/filterDropdown'
import Footer from './ui/Footer/footer'
import { TAB_ALL } from './utils/home/constant'
import { manageFilter } from './utils/home'
import ItemList from './ui/ItemList/itemList'
import { useHome } from './hooks/useHome'
import { NewsType } from './lib/types'

export default function Home() {
  const { tabActived, setTabActived, typeSelected, setTypeSelected, faves, setFaves, setPage, data, setData } =
    useHome()

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
