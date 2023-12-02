import { NewsDataFormatted } from '@/app/lib/types'
import { NewsType } from '@/app/ui/FilterDropdown/data'

export const getKey = (item: NewsDataFormatted) => {
  return `${item.created_at}-${item.author}`
}

type manageFaveProps = {
  item: NewsDataFormatted
  faves: NewsDataFormatted[]
  setFaves: (item: NewsDataFormatted[]) => void
}

export const manageFave = ({ item, faves, setFaves }: manageFaveProps) => {
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

type manageFilterProps = {
  item: NewsType | null
  setPage: (page: number) => void
  setData: (data: NewsDataFormatted[]) => void
  setTypeSelected: (item: NewsType | null) => void
}

export const manageFilter = ({ item, setPage, setData, setTypeSelected }: manageFilterProps) => {
  if (item) {
    setPage(0)
    setData([])
    localStorage.setItem('typeSelectedStorage', item.value)
    setTypeSelected(item)
  }
}
