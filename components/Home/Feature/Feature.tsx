import React from 'react'
import FeatureCard from './FeatureCard'

const Feature = () => {

    const features = [
        {icon: '/images/features/f1.svg', title: 'Analytics Business'},
        {icon: '/images/features/f2.svg', title: "Largest People"},
        {icon: '/images/features/f3.svg', title: 'Wide Coverage Map'},
        {icon: '/images/features/f4.svg', title: 'Artificial Intelligence'},
        {icon: '/images/features/f5.svg', title: "Trusted & Secure"},
        {icon: '/images/features/f6.svg', title: 'Mobile Apps'}
    ]

    return (
        <div className='py-16'>
            <h4 className="text-xl sm:text-2xl text-center font-extrabold">
                Meet our Quality Features
            </h4>

            <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {features.map((feature, i) => (
                    <FeatureCard
                        key={i}
                        order={i}
                        icon={feature.icon}
                        title={feature.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Feature