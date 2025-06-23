import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    order: number;
    url: string;
    image: string;
    title: string;
    tags: string[]; 
}

const RestaurantCard = ({ order, url, image, title, tags }: Props) => {
    return (
        <Link href={url} title={title} className='group' data-aos='fade-up' data-aos-anchor-placement='top-center' {...(order !== 0 && { 'data-aos-delay': `${order}00` })}>
            <Image 
                src={image} 
                alt={title ?? 'restaurant image'} 
                width={400} 
                height={400} 
                loading="lazy"
                className='w-full h-[250px] object-cover' 
            />

            <h1 className="mt-4 w-fit dark:hover-text-amber-300 group-hover:text-blue-950 transition-all duration-200 text-base sm:text-lg font-bold">
                {title}
            </h1>

            <div className="flex items-center flex-wrap font-medium mt-1.5 space-x-2">
                {tags.map((tag, i) => (
                    <p key={i} className="bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white my-1.5">
                        {tag}
                    </p>  
                ))}
            </div>
        </Link>
    )
}

export default RestaurantCard