"use client";

import Bgvideo from "./components/Bgvideo";
import Serviceshero from "./components/Serviceshero";
import Customerlogo from "./components/Customerlogo";
import Socialproof from "./components/Socialproof";
import Contentprimary from "./components/Contentprimary";
import Contentsecondry from "./components/Contentsecondry";
// import Cta from "./components/Cta";
import Heroone from "./components/Heroone";
// import { useState, useEffect } from 'react'
// TODO:we need to complete the position of landing page
export default function Home() {
  // const [isClient, setIsClient] = useState(false)
  // useEffect(() => {
  //   setIsClient(true)
  // }, [])
  return (
    <>
      <div className="relative">
        <Bgvideo />
        <Heroone />
        <Serviceshero />
        <Socialproof />
        <Contentprimary />
        {/* <Cta /> */}
        <Customerlogo />
        <Contentsecondry />
      </div>
    </>
  );
}
