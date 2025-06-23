import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    order: number;
    num: string;
    image: string;
    title: string;
    description: string;
}

const HowItWorksCard = ({ order, num, image, title, description }: Props) => {
  return (
    <div className='relative flex flex-col' data-aos='fade-right' data-aos-anchor-placement='top-center' {...(order !== 0 && { 'data-aos-delay': `${order}00` })}>
        <Image 
            src={image} 
            alt={title ?? 'service'} 
            width={250} 
            height={183} 
            loading="lazy"
            className='object-contain mx-auto flex-shrink-0' 
        />

        <span className="w-14 h-14 bg-pink-600 text-white text-xl font-bold flex items-center justify-center flex-col absolute top-0 left-0 rounded-full">
            {num}
        </span>

        <div className="flex flex-col justify-between h-full">
            <div>
                <h5 className="mt-6 text-lg sm:text-xl text-center font-bold">
                    {title}
                </h5>

                <p className='text-center sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300 mt-3 font-medium'>
                    {description}
                </p>
            </div>

            <Link 
                href={'#_'}
                title='Start Earning'
                className='mt-4 mx-auto block w-max text-base font-bold text-center text-blue-800 dark:text-blue-400 hover:text-blue-600 transition-all duration-150'
            >
                Start Earning &rarr;
            </Link>
        </div>
    </div>
  )
}

export default HowItWorksCard