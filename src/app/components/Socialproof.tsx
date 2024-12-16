import React from 'react'

function Socialproof() {
  return (
    <>
    <section className="bg-slate-900 dark:bg-gray-900">
  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl className="grid max-w-screen-md gap-8 mx-auto text-[#00df9a] sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
              <dd className="font-light text-[#00df9a] dark:text-gray-400">developers</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
              <dd className="font-light text-[#00df9a] dark:text-gray-400">contributors</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
              <dd className="font-light text-[#00df9a] dark:text-gray-400">organizations</dd>
          </div>
      </dl>
  </div>
</section>
    </>
  )
}

export default Socialproof