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
                <Link href='/' onClick={smallNav}>
                <Image src={Logo}
                alt='UNCMON Logo'
                width={150}
                height={40}
                />
                </Link>
               
            </div>
             {/* large screen nav */}
             {/* This nav links are hidden but after md size they will show up */}
             <ul className='hidden md:flex lg:text-[20px] uppercase text-slate-900'>
                    <li className='mr-4 lg:mr-8 hover:text-slate-100'><Link href='/' onClick={smallNav}>Home</Link></li>
                    <li className='mr-4 lg:mr-8 hover:text-slate-100'><Link href='/About' onClick={smallNav}>About</Link></li>
                    <li className='mr-4 lg:mr-8 hover:text-slate-100'><Link href='/Customers' onClick={smallNav}>Customers</Link></li>
                    <li className='mr-4 lg:mr-8 hover:text-slate-100'><Link href='/Services' onClick={smallNav}>Services</Link></li>
                    <li className='mr-4 lg:mr-8 hover:text-slate-100'><Link href='/Contact' onClick={smallNav}>Contact</Link></li>
                </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar