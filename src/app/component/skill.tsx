import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skill = () => {
  return (
    <div id='skill'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
      Skills
    </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20" >
      My Skills
      </h1>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
        {/* skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-500 text-indigo-100 mb-4 flex-shrink-0">
        <FaHtml5 className='text-3xl' />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
            HTML5
          </h2>
        </div>
        <div className='flex-grow'>
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-full w-[89%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>89%</p>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-500 text-indigo-100 mb-4 flex-shrink-0">
        <FaCss3Alt className='text-3xl' />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
            CSS
          </h2>
        </div>
        <div className='flex-grow'>
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-full w-[80%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>80%</p>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-500 text-indigo-100 mb-4 flex-shrink-0">
        <SiTypescript className='text-3xl' />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
            Typescript
          </h2>
        </div>
        <div className='flex-grow'>
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-full w-[70%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>70%</p>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-500 text-indigo-100 mb-4 flex-shrink-0">
        <RiNextjsFill className='text-3xl' />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
            Next.Js
          </h2>
        </div>
        <div className='flex-grow'>
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-full w-[69%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>69%</p>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-500 text-indigo-100 mb-4 flex-shrink-0">
        <FaWordpress className='text-3xl' />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
            WordPress
          </h2>
        </div>
        <div className='flex-grow'>
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-full w-[40%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>40%</p>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-500 text-indigo-100 mb-4 flex-shrink-0">
        <RiTailwindCssFill className='text-3xl' />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
            TailWindCss
          </h2>
        </div>
        <div className='flex-grow'>
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-full w-[47%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right'>47%</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skill