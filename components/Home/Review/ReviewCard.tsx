import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';

type Props = {
    title: string;
    description: string;
    userName: string;
    userImage: string;
    role: string;
}

const ReviewCard = ({ title, description, userName, userImage, role }: Props) => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 p-6 rounded-lg mr-4 shadow-md h-full flex flex-col justify-between'>
        <div>
            <h5 className='text-xl font-bold'>
                {title}
            </h5>

            <div className="mt-2 flex items-center">
                {Array(5).fill(null).map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 w-5 h-5" />
                ))}
            </div>

            <p className='mt-4 text-base font-medium text-gray-800 dark:text-gray-300'>
                {description}
            </p>
        </div>

        <div>
            <hr className='text-gray-300 dark:text-gray-700 my-6' />

            <div className='flex items-center space-x-4'>
                <Image 
                    src={userImage} 
                    alt={userName ?? 'service'} 
                    width={60} 
                    height={60} 
                    loading="lazy"
                    className='rounded-full' 
                />

                <div>
                    <h6 className='text-lg font-bold'>
                        {userName}
                    </h6>

                    <p className='text-sm sm:text-base'>
                        {role}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard