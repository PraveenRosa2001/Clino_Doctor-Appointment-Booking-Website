import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

const MyAppointments = () => {

  const {doctors} =useContext(AppContext)

  return (
    <div>
        <p className='pb-3 mt-12 font-bold text-2xl text-zinc-700 border-b'>My Appointments</p>
        <div>
            {doctors.slice(0,3).map((item,index)=>(
              <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
                  <div>
                    <img className='w-32 bg-indigo-50' src={item.image} alt=""/>
                  </div>
                  <div className='flex-1  text-zinc-600 '>
                    <p className='text-neutral-800 font-semibold text-lg'>{item.name}</p>
                    <p>{item.speciality}</p>
                    <p className='text-zinc-900 font-semibold mt-1 text-base'>Address:</p>
                    <p className='text-sm font-medium'>{item.address.line1}</p>
                    <p className='text-sm font-medium'>{item.address.line2}</p>
                    <p className='text-sm font-medium mt-1'><span className='text-zinc-900 font-semibold mt-1 text-base'>Date & Time:</span> 25, July, 2024 |  8:30 PM</p>
                  </div>
                  <div></div>
                  <div className='flex flex-col gap-2 justify-end mb-6'>
                    <button className="border rounded-full border-black px-6 py-2 text-base hover:bg-black hover:text-white transition-all duration-500 font-semibold">Pay Online</button>
                    <button className="border rounded-full border-black px-6 py-2 text-base hover:bg-red-600 hover:text-white transition-all duration-500 font-semibold">Cancel Appointment</button>
                  </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default MyAppointments
