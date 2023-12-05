'use client'
import React from 'react'
import Select from 'react-select'
import { StylesSelect } from './styles'
import { NEWS_TYPE } from '@/app/utils/home/constant'
import { NewsType } from '@/app/lib/types'

type FilterDropdownProps = {
  manageFilter: (item: NewsType | null) => void
  typeSelected?: NewsType | null
  isDisabled?: boolean
}

const FilterDropdown = ({ typeSelected, manageFilter, isDisabled }: FilterDropdownProps) => {
  return (
    <div className="flex justify-start mb-9" data-testid="select-filter">
      <Select
        options={NEWS_TYPE}
        onChange={manageFilter}
        styles={StylesSelect}
        placeholder="Select your news"
        name="filter-dropdown"
        value={typeSelected}
        isSearchable={false}
        isDisabled={isDisabled}
      />
    </div>
  )
}

export default FilterDropdown
