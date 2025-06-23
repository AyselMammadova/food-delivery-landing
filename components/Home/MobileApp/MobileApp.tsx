import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const MobileApp = () => {
  return (
    <div className="py-16">
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <Image
            src="/images/app.webp"
            alt="app"
            width={800}
            height={800}
            className="object-cover"
            data-aos='zoom-in' data-aos-anchor-placement='top-center'
        />

        <div>
            <h3 className="text-2xl sm:text-4xl font-bold leading-8 sm:leading-12">
                Connecting our user with iOS & Android apps. Download from iTune & Play store
            </h3>

            <p className="mt-6 text-sm sm:text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-400">
                Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.
            </p>

            <div className="sm:flex space-y-3 sm:space-y-0 sm:space-x-4 mt-8">
                <Link 
                    href="https://www.apple.com/app-store/" 
                    target='_blank'
                    title='App Store'
                    className='w-fit flex items-center border border-gray-400 p-[10px] sm:px-4 sm:py-3 rounded-md text-white bg-gray-950 hover:text-black hover:bg-white transition-all duration-300'
                >
                    <FaApple className='text-2xl mr-2' />

                    <p className='text-sm font-semibold'>
                        <span className='text-xs font-normal block'>
                            Download on the
                        </span>
                        App Store
                    </p>
                </Link>

                <Link 
                    href="https://play.google.com/store/apps?pli=1" 
                    target='_blank'
                    title='Google Play'
                    className='w-fit flex items-center border border-gray-400 p-[10px] sm:px-4 sm:py-3 rounded-md text-white bg-gray-950 hover:text-black hover:bg-white transition-all duration-300'
                >
                    <FaGooglePlay className='text-2xl mr-2' />

                    <p className='text-sm font-semibold'>
                        <span className='text-xs font-normal block'>
                            Download on the
                        </span>
                        Google Play
                    </p>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
