import React from 'react'

const Category = () => {

    const categories = [
        { name: 'Pizza' },
        { name: 'Breakfast' },
        { name: 'Japanese' },
        { name: 'Halal' },
        { name: 'Dessert' },
        { name: 'Lebanese' },
        { name: 'American' },
        { name: 'Sushi' },
        { name: 'Greek' },
        { name: 'Thai' },
        { name: 'Vegetarian' },
        { name: 'Italian' },
        { name: 'Mexican' },
        { name: 'Indian' },
        { name: 'Chinese' },
        { name: 'Burgers' }
    ];

    return (
        <div className='py-16'>
            <h4 className="text-xl sm:text-2xl text-center font-extrabold">
               Popular categories bg food
            </h4>

            <div className='w-[80%] mx-auto mt-10 flex flex-wrap gap-4 justify-center'>
                {categories.map((category, i) => (
                    <div 
                        key={i} 
                        className='px-6 py-3 rounded-full cursor-pointer hover:bg-emerald-600 hover:text-white transition-all duration-300 bg-gray-100 
                        text-gray-900 font-semibold text-lg dark:bg-gray-800 dark:text-white'
                    >
                        {category.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category