'use client'
import Image from "next/image";
import Bgvideo from "./components/Bgvideo";
import Serviceshero from "./components/Serviceshero";
import Customerlogo from "./components/Customerlogo";
import Socialproof from "./components/Socialproof";
import Contentprimary from "./components/Contentprimary";
import Contentsecondry from "./components/Contentsecondry";
// import { useState, useEffect } from 'react'
// TODO:we need to complete the position of landing page 
export default function Home() {
  // const [isClient, setIsClient] = useState(false)
  // useEffect(() => {
  //   setIsClient(true)
  // }, [])
  return (
    <>
    <div className="relative" >
<Bgvideo/>
    <Serviceshero/>
    <Socialproof/>
    <Contentprimary/>
    <Customerlogo/>
    <Contentsecondry/>
    </div>
    
    </>
  );
}
  