import { NewsDataFormatted } from '@/app/lib/types'
import NewsCard from '../NewsCard/newsCard'
import { getKey, manageFave } from '@/app/utils/home'

type ItemListProps = {
  data: NewsDataFormatted[]
  faves: NewsDataFormatted[]
  setFaves: React.Dispatch<React.SetStateAction<NewsDataFormatted[]>>
}

const ItemList = ({ data, faves, setFaves }: ItemListProps) => {
  return data?.map((item, index) => {
    return (
      <NewsCard
        item={item}
        key={`${index}-${item.author}`}
        faved={faves.find((fav) => getKey(fav) === getKey(item)) ? true : false}
        manageFave={(item: NewsDataFormatted) => manageFave({ item, faves, setFaves })}
      />
    )
  })
}

export default ItemList
