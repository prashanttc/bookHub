import Link from 'next/link'
import React from 'react'
import BookCover from './BookCover'

const BookCard = ({id, genre,color,cover, title}:books) => {
  return (
  <li className=''>
    <Link href={`/book/${id}`} className=''>
    <div className="w-[90vw] gap-10 md:w-[250px] rounded-2xl bg-[#12141D] p-5 md:min-h-[410px] md:max-h-[410px] flex flex-row md:flex-col">
    <div className="md:w-full rounded-2xl flex md:items-center md:justify-center md:p-5 ">
    <BookCover cover={cover} varient="medium" coverColor={color} className='hidden md:block'/>
    <BookCover cover={cover} varient="small" coverColor={color}  className='block md:hidden'/>
      </div>
      <div className="mt-2 flex flex-col gap-3">
        <h1 className="text-xl font-semibold text-white ">{title}</h1>
        <h1 className="text-light-100 text-sm italic">{genre}</h1>
      </div>
    </div></Link>
  </li>
  )
}

export default BookCard
