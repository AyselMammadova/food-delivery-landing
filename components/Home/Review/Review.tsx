'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const reviews = [
    {title: 'Great Work!', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur officiis laudantium numquam aliquam eum veniam ad sit. Excepturi, ex nisi.', userName: 'Jassica Doe', userImage: '/images/users/u1.webp', role: 'UI UX Designer'},
    {title: 'Creative Work!', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', userName: 'Jany Doe', userImage: '/images/users/u2.webp', role: 'Web Developer'},
    {title: 'Awesome Work!', description: 'Consequatur officiis laudantium numquam aliquam eum veniam ad sit.', userName: 'Jason Doe', userImage: '/images/users/u3.webp', role: 'App Developer'}
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

const Review = () => {
  return (
    <div className='py-16'>
        <h4 className="text-xl sm:text-2xl text-center font-extrabold">
            What people say about us
        </h4>

        <div className='w-[80%] mx-auto mt-16'>
            <Carousel
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
            >
                {reviews.map((review, i) => (
                    <ReviewCard
                        key={i}
                        title={review.title}
                        description={review.description}
                        userName={review.userName}
                        userImage={review.userImage}
                        role={review.role}
                    />
                ))}
            </Carousel>
        </div>
    </div>
  )
}

export default Review