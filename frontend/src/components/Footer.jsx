import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          {/*---------Left-Side--------*/}
          <div>
                <img className='mb-5 w-44 cursor-pointer' src={assets.Clino} alt=''/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6 font-semibold text-base text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          {/*---------center-side---------*/}
          <div className='mt-1'>
                <p className='text-lg  mb-5 font-bold'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li className='font-semibold text-base'>HOME</li>
                    <li className='font-semibold text-base'>ABOUT US</li>
                    <li className='font-semibold text-base'>CONTACT US</li>
                    <li className='font-semibold text-base'>PRIVACY POLICY</li>
                </ul>
          </div>
          {/*---------Right-Side----------*/}
          <div className='mt-1'>
                <p className='text-lg  mb-5 font-bold'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li className='font-semibold text-base'>0750104549</li>
                    <li className='font-semibold text-base'>rosapraveen1@gmail.com</li>
                </ul>
          </div>
        </div>
        {/*----------Copy right text--------*/}
        <div>
            <hr className='h-0.5 bg-gray-300 border-none'/>
            <p className='py-5 text-center font-semibold text-base'>
            Copyright © 2024 CLINO - All Right Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer
