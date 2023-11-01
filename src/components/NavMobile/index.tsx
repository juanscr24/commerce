'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { ROUTES } from '@/constants/constants';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className='w-full fixed z-[100] bg-white shadow-lg h-20 sm:hidden'>
            <div className='flex items-center sm:justify-center justify-between h-full w-full'>
                <Link href='/'>
                    <Image alt='' src='/logoBlack.png' width={60} height={60} priority className='max-sm:ml-4' />
                </Link>
                <div className='mr-6'>
                    <AiOutlineMenu onClick={handleOpen} className='sm:hidden text-2xl cursor-pointer' />
                </div>
            </div>
            <div className={isOpen ? 'left-0 top-0 w-[65%]  h-screen relative bg-white flex flex-col justify-start z-50 pl-4 shadow-lg' : 'hidden'}>
                <div className='flex absolute right-6 top-6 w-full justify-end items-center '>
                    <AiOutlineClose onClick={handleOpen} className='text-2xl text-black mb-4' />
                </div>
                <ul className=' justify-center items-center mt-10 ease-in duration-1000'>
                    {ROUTES.map((option, index) => (
                        <li key={index} className='text-2xl text-black'>
                            <Link className='flex flex-col m-5' href={option.path}>{option.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default NavMobile