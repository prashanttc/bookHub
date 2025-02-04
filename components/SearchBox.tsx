import React from 'react'
import { Input } from './ui/input'
import Image from 'next/image'

const SearchBox = () => {
  return (
    <div className='search'>
      <Image width={24} height={24} src='/icons/search-fill.svg' alt='search'/>
      <Input className='search-input'/>
    </div>
  )
}

export default SearchBox
