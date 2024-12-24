import React from "react";
import Image from "next/image";
import Link from "next/link";
import sampleimg from "../../../public/Sample images/pexels-pixabay-349758.jpg";
function page() {
  return (
    <>
      <div className=" relative flex bg-slate-900 py-28 items-center justify-center flex-col ">
        <div className=" aspect-w-16 aspect-h-9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2ImfsIPUQsQ?si=r8B518ntpvrSD5K3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        {/* <div className="w-screen">
          <video
            src="WebHeader.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="md:min-w-[105%] min-w-full  min-h-full "
          />
        </div> */}
      </div>
      <div className=" relative  bg-slate-900 sm:flex items-center justify-center gap-4  ">
        <div className=" py-4 flex items-center justify-center">
        <Link href='/Project1' >
          <Image src={sampleimg} alt="mockup" width={450} height={250} />
          </Link> 
        </div>
        <div className=" py-4 gap-4 flex items-center justify-center">
          <Link href='/Project1' >
            <Image src={sampleimg} alt="mockup" width={450} height={250} />
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default page;
