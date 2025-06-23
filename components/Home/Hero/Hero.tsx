import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGooglePlay, FaLocationArrow } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa6'
import { GrMapLocation } from 'react-icons/gr'

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center flex-col'>
        <div className='w-[90%] md:w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-6 xl:gap-10'>
            <div data-aos='fade-up' className='lg:col-span-4 xl:col-span-3'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl my-6 font-extrabold leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem]'>
                    Your favorite food, <br className='hidden xl:block' />
                    <span className='text-pink-600'>delivered</span> your home
                </h1>

                <p className='text-sm md:text-base font-medium text-gray-800 dark:text-gray-400'>
                    Food, drink, groceries and more available for delivery and pickup.
                </p>

                <div className='w-full my-8 max-w-md'>
                    <div className='flex items-center h-14 overflow-hidden bg-gray-100 shadow-md'>
                        <figure className='px-4'>
                            <GrMapLocation className='w-5 h-5 text-black' />
                        </figure>
                        
                        <input 
                            type='text' 
                            placeholder='Enter your address' 
                            className='flex-1 px-2 text-sm text-black bg-transparent outline-none h-full' 
                        />

                        <button className="bg-gray-900 text-white px-4 h-full hover:bg-gray-800 flex items-center justify-center cursor-pointer">
                            <FaLocationArrow className='w-4 h-4' />
                        </button>
                    </div>
                </div>

                <p className="text-gray-700 dark:text-gray-400 text-sm mb-6">
                    Apps Available to download on
                </p>

                <div className="flex space-x-4">
                    <Link 
                        href="https://www.apple.com/app-store/" 
                        target='_blank'
                        title='App Store'
                        className='flex items-center border border-gray-400 p-[10px] sm:px-4 sm:py-3 rounded-md hover:bg-gray-950 hover:text-white transition-all duration-300'
                    >
                        <FaApple className='text-xl sm:text-2xl mr-2' />

                        <p className='text-sm font-semibold'>
                            <span className='text-[10px] sm:text-xs font-normal block'>
                                Download on the
                            </span>
                            App Store
                        </p>
                    </Link>

                    <Link 
                        href="https://play.google.com/store/apps?pli=1" 
                        target='_blank'
                        title='Google Play'
                        className='flex items-center border border-gray-400 p-[10px] sm:px-4 sm:py-3 rounded-md hover:bg-gray-950 hover:text-white transition-all duration-300'
                    >
                        <FaGooglePlay className='text-xl sm:text-2xl mr-2' />

                        <p className='text-sm font-semibold'>
                            <span className='text-[10px] sm:text-xs font-normal block'>
                                Download on the
                            </span>
                            Google Play
                        </p>
                    </Link>
                </div>
            </div>

            <figure data-aos='fade-left' data-aos-delay='150' className='col-span-2 xl:col-span-3 mx-auto hidden lg:block'>
                <Image src='/images/hero.png' alt='hero image' width={540} height={472} priority />
            </figure>
        </div>
    </div>
  )
}

export default Hero