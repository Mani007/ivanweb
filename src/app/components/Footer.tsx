import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/UNCMON-20.svg'
function Footer() {
  return (
    <>
    
    <footer className="w-full text-gray-700 bg-slate-900 body-font">
        <div
            className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                <div className="flex flex-col items-center justify-center font-medium text-[#00df9a] title-font md:justify-start">
                <div className=" ">
             {/* <ion-icon name="logo-pwa" className="text-5xl text-blue-600 hover:text-stone-600"></ion-icon> */}
            <Link href='/'> 
            <Image src={Logo}
      width={250}
      height={250}
      alt="Picture of the author"
    /></Link>
         </div>
         <div className="">
                    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a target="_blank" href="https://www.youtube.com/channel/UCT1NVlCIZs5oFeUn76M2X8w" className="ml-8 text-gray-500 cursor-pointer hover:text-[#00df9a]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"  viewBox="0 0 24 24">
                        
                         <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> </svg>
                        </a>
                        
                        <a target="_blank" href="https://www.linkedin.com/company/opscraft-cloud" className="ml-3 text-gray-500 cursor-pointer hover:text-[#00df9a]">
                        <svg 
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
</svg>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/company/opscraft-cloud" className="ml-3 text-gray-500 cursor-pointer hover:text-[#00df9a]">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                </path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
                </div>
                {/* <p className="mt-2 text-sm text-gray-500">Design, Code and Ship!</p> */}
                
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-slate-200 uppercase title-font">UNCMON</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <Link href='/About' className="text-gray-500 cursor-pointer hover:text-[#00df9a] ">The Company</Link>
                        </li>
                        {/* <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-[#00df9a]">The Team</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-[#00df9a]">Partner with US</a>
                        </li> */}
                        <li className="mt-3">
                            <Link href='/ResponsibleAI' className="text-gray-500 cursor-pointer hover:text-[#00df9a]">Team</Link>
                        </li>
                        <li className="mt-3">
                            <Link href='/Technology' className="text-gray-500 cursor-pointer hover:text-[#00df9a]">Technology</Link>
                        </li>
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-slate-200 uppercase title-font">Offerings</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <Link href='/Services' className="text-gray-500 cursor-pointer hover:text-[#00df9a]">Services</Link>
                        </li>
                        <li className="mt-3">
                            <Link href='/Solutions' className="text-gray-500 cursor-pointer hover:text-[#00df9a]">Solutions</Link>
                        </li>
                        <li className="mt-3">
                            <Link href='/Industry' className="text-gray-500 cursor-pointer hover:text-[#00df9a]">Industry</Link>
                        </li>
                        <li className="mt-3">
                            <Link href='/Customers' className="text-gray-500 cursor-pointer hover:text-[#00df9a]">Customers</Link>
                        </li>
                        {/* <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-[#00df9a]">Impact</a>
                        </li> */}
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-slate-200 uppercase title-font">Methodology
                    </h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <Link target="_blank" href="https://www.copyright.gov/legislation/dmca.pdf" className="text-gray-500 cursor-pointer hover:text-[#00df9a]">Terms &amp; Privacy</Link>
                        </li>
                        {/* <li className="mt-3">
                            <a  className="text-gray-500 cursor-pointer hover:text-[#00df9a]">License</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-[#00df9a]">FAQ</a>
                        </li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */}
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-slate-200 uppercase title-font">Contact</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <p className="text-gray-500 cursor-pointer hover:text-[#00df9a]">contact@uncmon.com</p>
                        </li>
                        {/* <li className="mt-3">
                            <a className="text-gray-500 cursor-pointer hover:text-[#00df9a]">Request a Demo</a>
                        </li> */}
                        <li className="mt-3">
                            <p className="text-gray-500 cursor-pointer hover:text-[#00df9a]">+44 0000 0000</p>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        <div className="bg-gray-300">
            <div className="container px-5 py-4 mx-auto">
                <p className="text-sm text-gray-700 capitalize text-center xl:text-center">© 2023-2024 All rights reserved </p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer