import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

const NavBar = () => {
  return (
    <div
      data-testid="navbar"
      className={`${styles.navbar} flex justify-center md:justify-start px-4 md:px-24 lg:px-36  py-11 mb-16`}
    >
      <Image src="/hacker-news.png" alt="logo" width={208} height={28} className="block md:hidden" />
      <Image src="/hacker-news@2x.png" alt="logo" width={208} height={28} className="hidden md:block lg:hidden" />
      <Image src="/hacker-news@3x.png" alt="logo" width={208} height={28} className="hidden lg:block" />
    </div>
  )
}

export default NavBar
