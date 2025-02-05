'use client';
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { sortTypes } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'


const Sort = () => {
  const router= useRouter();
  const path = usePathname();

const handlesort = (value:string)=>{  
  router.push(`${path}?sort=${value}`)
}
  return (
    <div className='flex text-white items-center justify-center px-5 py-2 rounded-lg bg-dark-300 '>
      <h1 className='font-semibold'>Filter by:</h1>
 <Select defaultValue={sortTypes[3].value} onValueChange={handlesort}>
      <SelectTrigger className="w-fit md:min-w-[120px] outline-none ring-0 focus:ring-0 text-light-200  font-semibold  border-none">
      <SelectValue/>
    </SelectTrigger>
    <SelectContent className=''>   
    {sortTypes.map((sort)=>(
      <SelectItem value={sort.value} key={sort.label}>{sort.label}</SelectItem>
     ))}   
    </SelectContent>
  </Select>
    </div>
  )
}

export default Sort
