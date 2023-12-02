import React, { useEffect } from 'react'
import { Loading } from '../Loading/loading'
import { useInView } from 'react-intersection-observer'
import { TAB_ALL } from '@/app/utils/home/constants'

type Props = {
  tabActived: string
  setPage: React.Dispatch<React.SetStateAction<number>>
}
const Footer = ({ tabActived, setPage }: Props) => {
  let { ref, inView } = useInView({ trackVisibility: true, delay: 300, threshold: 0.5 })

  useEffect(() => {
    if (inView) setPage((prev: number) => prev + 1)
  }, [inView])

  console.log('ref', ref)
  console.log('inView', inView)

  return (
    <>
      {tabActived === TAB_ALL ? (
        <footer ref={ref} data-testid="home-footer">
          <Loading />
        </footer>
      ) : (
        <footer>
          <Loading />
        </footer>
      )}
    </>
  )
}

export default Footer
