'use client'
import { FC } from 'react'
import Link from 'next/link'
import { INavbar } from './types'
import Image from 'next/image'
import { ROUTES } from '@/constants/constants'
import { usePathname } from "next/navigation";

export const Navbar: FC<INavbar> = ({ }) => {
    return (
        <nav className='flex items-center justify-between mx-10 max-sm:hidden'>
            <Link href='/#'>
                <Image alt='link logo' src='/logoBlack.png' width={80} height={80} />
            </Link>
            <div className='flex gap-10'>
                {ROUTES.map((link) => {
                    const pathname = usePathname();
                    const isActive = pathname == link.path;
                    return (
                        <Link href={link.path} key={link.id} className={`${isActive ? 'font-bold' : ''} hover:border-b-2`}>{link.name}</Link>
                    )
                })}
            </div>
            <div>
                <Link href='/login '>LOGIN</Link>
            </div>
        </nav>
    )
}
