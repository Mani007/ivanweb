import React from 'react'

function page() {
  return (
    <>
    <div className=" relative flex bg-slate-900 py-28 items-center justify-center flex-col ">
        <div className=" aspect-w-16 aspect-h-9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2ImfsIPUQsQ?si=r8B518ntpvrSD5K3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="mt-16 mx-20 text-start">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">UncMon: The Process</h1>
            <p className="text-lg text-gray-100 sm:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, animi consequatur optio expedita deleniti doloribus minus sint enim, autem sunt ipsam quas explicabo dolorem non cupiditate eius ea rerum ducimus veritatis architecto labore. Reprehenderit quibusdam rem est molestiae quasi voluptatibus dicta accusantium eveniet tenetur. Saepe quidem libero debitis voluptas accusantium!</p>
            <p className="text-lg text-gray-100 sm:text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ducimus minus pariatur fuga blanditiis facilis sequi, expedita harum, nobis autem eaque commodi accusantium illum et deserunt in deleniti sit corporis!
            </p>
            
        </div>
        </div>
    </>
  )
}

export default page