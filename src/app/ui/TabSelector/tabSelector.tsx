'use client'
import React from 'react'
import styles from './styles.module.css'
import { TABS } from '@/app/utils/home/constant'

type TabSelectorProps = {
  tabActivated: string
  setTabActivated: (value: string) => void
}
const TabSelector = ({ tabActivated, setTabActivated }: TabSelectorProps) => {
  return (
    <div data-testid="home-tab-selector" className={`${styles.contentTabs} flex justify-center my-0 mx-auto mb-16`}>
      {TABS?.map((tab, index) => (
        <button
          onClick={() => {
            setTabActivated(tab.value)
          }}
          className={`text-gray-600 transition duration-300 z-1 relative w-24 border border-solid py-0 mx-0 text-base font-medium ${
            tabActivated === tab.value ? `${styles.activeTab}` : ''
          }`}
          key={index}
        >
          {tab.title}
        </button>
      ))}
    </div>
  )
}

export default TabSelector
