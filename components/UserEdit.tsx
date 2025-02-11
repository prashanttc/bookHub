'use client'
import React from 'react'
import { AlertDialogHeader, AlertDialogFooter, AlertDialogDescription, AlertDialogContent, AlertDialog, AlertDialogTrigger, AlertDialogTitle, AlertDialogCancel, AlertDialogAction } from './ui/alert-dialog'
import UserProfileForm from './forms/UserProfileForm'
const UserEdit = () => {

  return (
    <AlertDialog>
  <AlertDialogTrigger className='bg-light-200 p-2 px-5 rounded-xl text-black font-semibold'>edit profile</AlertDialogTrigger>
  <AlertDialogContent className='bg-dark-100 w-[100vw] md:min-w-[40vw]  p-10 border-none text-white  '>
    <AlertDialogHeader className='flex items-center'>
      <AlertDialogTitle className='text-2xl '>edit you profile</AlertDialogTitle>
    </AlertDialogHeader>
    <UserProfileForm/> 
    <AlertDialogFooter>
      <AlertDialogCancel className='w-full text-black'>Cancel</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}
export default UserEdit

