import { NewsDataFormatted } from '@/app/lib/types'

export const getKey = (item: NewsDataFormatted) => {
  return `${item.created_at}-${item.author}`
}
