import React from 'react'
import Button from '../Button'

const About = () => {
  return (
    <div className='w-full bg-yellow-500 rounded-tl-md rounded-tr-md overflow-hidden'>

      <div className='md:px-16 md:py-20 px-5 py-10'>
        <h1 className='md:text-5xl text-[31px] font-semibold  '>
          Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
      </div>

      <div className='border-t-2'>
        <div className='md:flex flex-col justify-between md:px-16 px-5 py-8 md:text-md text-xl font-medium'>
          <div className='w-full'>
            <p className='md:text-md text-2xl'>
              What you can expect:
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mt-4'>
            <div>
              <p className='md:text-normal text-xl'>
                We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
              </p>
            </div>
            <div className='self-end md:pl-32'>
              <p className='text-xl '>
                S:
              </p>
            </div>
            <div className='py-8'>
              <p className='text-normal'>
                We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
              </p>
            </div>
            <div className='flex flex-col md:pl-32 md:pt-8'>
              <a href="">Instagram</a>
              <a href="">Facebook</a>
              <a href="">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t-2'>
        <div className='md:px-16 px-5 py-4 md:flex justify-between'>
          <div className='md:w-1/2 w-full'>
            <h2 className='font-normal md:text-5xl text-3xl'>Our Approach:</h2>
            <div className='mt-6'>
              <Button />
            </div>
          </div>

          <div className="md:w-1/2 h-full w-full mt-8 md:mt-0">
            <img 
              className="bg-gray-200 w-full max-w-full rounded" 
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" 
              alt="image description" 
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
