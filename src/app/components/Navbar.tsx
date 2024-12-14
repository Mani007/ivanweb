'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/UNCMON-20.svg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {

    const [menuIcon, setmenuIcon] = useState(false)
    const smallNav = () => { // we are toggeling the menuIcon state here
        setmenuIcon(!menuIcon)
    }

  return (
    <>
    <header className='bg-slate-400 text-blue-500 w-full ease-in duration-300 fixed top-0 left-0 z-10'>
        <nav className='max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4'>
            <div>
                <Link href='/'>
                <Image src={Logo}
                alt='UNCMON Logo'
                width={150}
                height={40}
                />
                </Link>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar