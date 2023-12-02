import { NewsDataFormatted } from '@/app/lib/types'
import Image from 'next/image'
import React from 'react'
import * as timeago from 'timeago.js'

type NewsCardProps = {
  manageFave: (item: NewsDataFormatted) => void
  item: NewsDataFormatted
  faved: boolean
}

const NewsCard = ({ item, faved, manageFave }: NewsCardProps) => {
  const { author, created_at, story_title, story_url } = item

  return (
    <div
      data-testid="home-news-card"
      className="flex min-h-30 opacity-80 border rounded-lg border-gray-300 bg-white p-0 pl-6 items-center max-w-550 transition duration-300 hover:opacity-50"
    >
      <a href={story_url} target="_blank" className="cursor-pointer w-full">
        <div className="flex items-center font-roboto text-xs mt-3 mr-2">
          <Image src="/clock.png" alt="date" className="w-4 h-4 object-contain m-0 mr-2" width={20} height={20} />
          <p className="m-0">
            {timeago.format(created_at)} by {author}
          </p>
        </div>
        <p className="m-1.5 mr-4 font-roboto font-medium text-sm">{story_title}</p>
      </a>

      <div className="w-16 h-full rounded-r-lg bg-gray-100 border-l border-gray-100 flex items-center">
        <Image
          data-testid="home-post-card-heart"
          className="w-6 h-5 object-contain m-0 mx-auto cursor-pointer"
          alt="fav icon"
          width={20}
          height={20}
          onClick={() => {
            manageFave(item)
          }}
          src={faved ? '/heart.png' : '/heart-empty.png'}
        />
      </div>
    </div>
  )
}

export default NewsCard
