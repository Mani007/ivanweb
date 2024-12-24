import React from 'react'
import Link from 'next/link'
function Bgvideo() {
  return (
    <>
     <div className="container relative flex items-center justify-center flex-col">
    {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
    {/* <Image
      src="/images/opscraftherosection.png"
      width={720}
      height={600}
      alt="Picture of the author"
    /> */}
    <div className='w-screen'>

    <video src="WebHeader.mp4" autoPlay loop muted playsInline  className='md:min-w-[125%] min-w-full  min-h-full '/>
    </div>
    <div className="sm:text-start sm:items-start sm:justify-start text-center items-center justify-center absolute sm:w-4/5 w-screen">
    
      <h1 className="title-font mt-10 sm:text-2xl text-sm  font-medium text-slate-200"> CRAFTING EXTRAORDINARY BRAND STORIES</h1>
      <p className="text-sm sm:text-xl leading-relaxed text-slate-100">A creative studio that create, produce and deliver beautifully <br /> crafted  animation content that transforms the world&apos;s greatest brands. </p>
      <div className="flex justify-center sm:justify-start">
        <Link href='/Behindthescene'>
        <button className=" mt-4 text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View More</button>
        </Link>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    
    </div>
  </div>
    </>
  )
}

export default Bgvideo