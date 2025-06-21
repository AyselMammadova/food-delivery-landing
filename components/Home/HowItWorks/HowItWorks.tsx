import React from 'react'
import HowItWorksCard from './HowItWorksCard'

const HowItWorks = () => {

  const services = [
    {num: '01', image: '/images/howitworks/w1.png', title: 'Become a Delivery Man', description: "As a delivery driver, you'll make reliable money—working anytime, anywhere."},
    {num: '02', image: '/images/howitworks/w2.png', title: "Become a Partner", description: "Grow your business and reach new customers by partnering with us."},
    {num: '03', image: '/images/howitworks/w3.png', title: 'Try Android/iOS App', description: "Get the best DoorDash experience with live order tracking."}
  ]

  return (
    <div className='py-16'>
      <h4 className="text-xl sm:text-2xl text-center font-extrabold">
        Let’s see how it works
      </h4>
      
      <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
        {services.map((service, i) => (
          <HowItWorksCard 
            key={i}
            num={service.num}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  )
}

export default HowItWorks