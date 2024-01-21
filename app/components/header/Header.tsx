'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'
import { motion } from 'framer-motion'

const navItens = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
]

export default function Header() {
  return (
    <motion.header
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center "
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          {/* <Image width={58} height={49} src="/images/logo.svg" alt="logo" /> */}
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10 ">
          {navItens.map((el) => (
            <NavItem {...el} key={el.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
