import React from "react";
import Image from 'next/image'
import sampleimg from '../../../public/Sample images/pexels-pixabay-349758.jpg'
function page() {
  return (
    <>
      <div className=" relative bg-slate-900 flex items-center justify-center flex-col">
        <div className="w-screen">
          <video
            src="WebHeader.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="md:min-w-[105%] min-w-full  min-h-full "
          />
        </div>
      </div>
      <div className=" relative  bg-slate-900 sm:flex items-center justify-center gap-4  ">
      <div className=" py-4 gap-4">
            <Image src={sampleimg} alt="mockup" width={450} height={250}/>
        </div>  
      <div className=" py-4 gap-4">
            <Image src={sampleimg} alt="mockup" width={450} height={250}/>
        </div>  
      </div>
    </>
  );
}

export default page;
