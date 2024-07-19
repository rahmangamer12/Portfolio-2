"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div>
        <section className="text-gray-600 body-font bg-fixed b-cover bg-center bg-gray-200">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am 
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Web Developer', 'Frontend Developer', 'Next.Js Developer', 'Typescript Developer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className='w-[100px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed">
        Hello My Name is AbdulRehman and I study in Class 9th And i am a Student of PIAIC 
        And I Completed TypeScript And I Learn Next.Js 14 and My Course Name is Cloud
         Applied Generative Ai Thank You So Much For Read My About  
      </p>
      <div className="flex justify-center">
        <Link href={"#contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[20rem] h-auto"
        alt="hero"
        width={900}
        height={900}
        src={require('../../../public/assets/picture/boy.jpeg')}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero