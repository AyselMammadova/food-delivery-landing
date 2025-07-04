import Image from 'next/image';
import React from 'react'

type Props = {
    order: number;
    icon: string;
    title: string;
}

const FeatureCard = ({ order, icon, title }: Props) => {
  return (
    <div className='flex flex-col' data-aos='fade-up' data-aos-anchor-placement='top-center' {...(order !== 0 && { 'data-aos-delay': `${order}00` })}>
        <Image 
            src={icon} 
            alt={title ?? 'feature'} 
            width={100} 
            height={100} 
            loading="lazy"
            className='object-contain mx-auto' 
        />

        <h5 className="mt-8 text-lg text-center font-bold">
            {title}
        </h5>

        <p className='mt-3 text-center sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300'>
            We’re driven beyond just finishing the projects. We want to find smart solutions.
        </p>
    </div>
  )
}

export default FeatureCard