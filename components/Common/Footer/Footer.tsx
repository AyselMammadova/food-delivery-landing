import Link from 'next/link'
import React from 'react'
import { FaDribbble, FaFacebook, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdDeliveryDining } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='py-16 bg-gray-800'>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        <div>
          <Link href={'/'} title='Foodie' className="flex items-center space-x-2">
            <figure className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
              <MdDeliveryDining className='w-6 h-6 text-black' />
            </figure>

            <span className='hidden sm:block text-xl md:text-2xl text-white font-bold'>
              Foodie
            </span>
          </Link>

          <p className='mt-4 text-gray-200 font-medium'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ullam consequuntur voluptate eligendi, blanditiis ab quae maiores!
          </p>

          <div className="mt-6 flex items-center space-x-2">
            <Link 
              href={'#_'} 
              target='_blank' 
              className="flex items-center justify-center flex-col w-8 h-8 bg-blue-600 text-white rounded-full"
            >
              <FaFacebookF />
            </Link>

            <Link 
              href={'#_'} 
              target='_blank' 
              className="flex items-center justify-center flex-col w-8 h-8 bg-pink-500 text-white rounded-full"
            >
              <FaInstagram />
            </Link>

            <Link 
              href={'#_'} 
              target='_blank' 
              className="flex items-center justify-center flex-col w-8 h-8 bg-sky-400 text-white rounded-full"
            >
              <FaTwitter />
            </Link>

            <Link 
              href={'#_'} 
              target='_blank' 
              className="flex items-center justify-center flex-col w-8 h-8 bg-red-600 text-white rounded-full"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>

        <div className='space-y-5'>
          <h6 className='text-lg font-bold text-white'>
            Company
          </h6>

          <Link href={'#_'} title='About Us' className='footer__link'>
            About Us
          </Link>

          <Link href={'#_'} title='News & Press' className='footer__link'>
            News & Press
          </Link>

          <Link href={'#_'} title='Our Customers' className='footer__link'>
            Our Customers
          </Link>

          <Link href={'#_'} title='Leadership' className='footer__link'>
            Leadership
          </Link>

          <Link href={'#_'} title='Careers' className='footer__link'>
            Careers
          </Link>
        </div>

        <div className='space-y-5'>
          <h6 className='text-lg font-bold text-white'>
            Resources
          </h6>

          <Link href={'#_'} title='Blog' className='footer__link'>
            Blog
          </Link>

          <Link href={'#_'} title='Webinar & Events' className='footer__link'>
            Webinar & Events
          </Link>

          <Link href={'#_'} title='Podcast' className='footer__link'>
            Podcast
          </Link>

          <Link href={'#_'} title='E-book & Guides' className='footer__link'>
            E-book & Guides
          </Link>
        </div>

        <div>
          <h6 className='text-lg font-bold text-white'>
            Contact Us
          </h6>

          <p className='mt-6 text-sm text-white'>
            Our Mobile Number
            <Link href={'tel:+1893842134923'} className='block text-base font-bold text-yellow-300 mt-1'>
              +1893842134923
            </Link>
          </p>

          <p className='mt-6 text-sm text-white'>
            Our Email
            <Link href={'mailto:example@gmail.com'} className='block text-base font-bold text-yellow-300 mt-1'>
              example@gmail.com
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p className='text-center md:text-left text-white'>
            Copyright © 2025 Webdev. All rights reserved
          </p>

          <div className="mt-4 md:mt-0 flex items-center text-white">
            <span className='mr-4'>
              Social: 
            </span>

            <ul className='flex items-center space-x-4'>
              <li>
                <Link href={'#_'} target='_blank' className='text-white hover:text-gray-500 transition-all ease-in'>
                  <FaFacebook />
                </Link>
              </li>

              <li>
                <Link href={'#_'} target='_blank' className='text-white hover:text-gray-500 transition-all ease-in'>
                  <FaTwitter />
                </Link>
              </li>

              <li>
                <Link href={'#_'} target='_blank' className='text-white hover:text-gray-500 transition-all ease-in'>
                  <FaDribbble />
                </Link>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Footer