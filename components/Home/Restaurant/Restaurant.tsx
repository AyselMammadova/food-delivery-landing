import React from 'react'
import RestaurantCard from './RestaurantCard'
import Link from 'next/link'

const Restaurant = () => {

  const restaurants = [
    {url: '#_', image: '/images/restaurants/chicken-noodle.jpg', title: 'Chicken noodle', tags: ['Asia', 'Noodle']},
    {url: '#_', image: '/images/restaurants/kebab.jpg', title: "Kebabs", tags: ['Azerbaijan', 'Delicious']},
    {url: '#_', image: '/images/restaurants/snack-shake.jpg', title: 'Snack Shake Fast Food', tags: ['American', 'Fast Food', 'Burgers']},
    {url: '#_', image: '/images/restaurants/lahmacun.jpg', title: 'Lahmacun', tags: ['Turkish', 'Fast Food']},
    {url: '#_', image: '/images/restaurants/mcdonalds-burger.png', title: "McDonald's Burgers (Fillmore)", tags: ['American', 'Fast Food', 'Burgers']},
    {url: '#_', image: '/images/restaurants/sushi.jpeg', title: 'Sushi', tags: ['Japan', 'Fast Food']}
  ]

  return (
    <div className='py-16'>
      <h4 className="text-xl sm:text-2xl text-center font-extrabold">
        Available Restaurant Nearby Area
      </h4>

      <div className='w-[80%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16'>
        {restaurants.map((restaurant, i) => (
          <RestaurantCard 
            key={i}
            url={restaurant.url}
            image={restaurant.image} 
            title={restaurant.title}
            tags={restaurant.tags}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link 
          href={'#_'} 
          title='Discover'
          className='px-9 py-2.5 sm:px-12 sm:py-3.5 rounded-full font-bold text-base sm:text-lg bg-cyan-700 text-white 
          hover:bg-cyan-950 transition-all duration-300 dark:bg-cyan-300 dark:text-black dark:hover:bg-cyan-200'
        >
          Discover More &rarr;
        </Link>
      </div>
    </div>
  )
}

export default Restaurant