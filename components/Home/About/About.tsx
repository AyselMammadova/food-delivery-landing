import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='py-16'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            <figure>
                <Image
                    src={'/images/about.webp'} 
                    alt='about' 
                    width={800} 
                    height={800}
                />
            </figure>

            <div>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12'>
                    We deliver our products as fast as superman can do
                </h3>

                <p className='mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quos distinctio eaque deserunt porro doloremque.
                </p>

                <ul className='mt-8'>
                    <li className='flex mt-8 items-center space-x-6'>
                        <p className='text-3xl md:text-5xl opacity-40 font-bold'>
                            01
                        </p>

                        <div>
                            <h6 className='text-base sm:text-lg font-extrabold'>
                                Easy to use application
                            </h6>

                            <p className='mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>
                                We’re driven beyond just finishing the projects. We want to find solutions using our website & apps
                            </p>
                        </div>
                    </li>   

                    <li className='flex mt-8 items-center space-x-6'>
                        <p className='text-3xl md:text-5xl opacity-40 font-bold'>
                            02
                        </p>

                        <div>
                            <h6 className='text-base sm:text-lg font-extrabold'>
                                Deliver Food within 30 min
                            </h6>

                            <p className='mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>
                                We’re driven beyond just finishing the projects. We want to find solutions using our website & apps
                            </p>
                        </div>
                    </li>   

                    <li className='flex mt-8 items-center space-x-6'>
                        <p className='text-3xl md:text-5xl opacity-40 font-bold'>
                            03
                        </p>

                        <div>
                            <h6 className='text-base sm:text-lg font-extrabold'>
                                100% Reliable with Privacy
                            </h6>

                            <p className='mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>
                                We’re driven beyond just finishing the projects. We want to find solutions using our website & apps
                            </p>
                        </div>
                    </li>   
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About