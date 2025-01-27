/* eslint-disable no-unused-vars */
import React from 'react'
import { doctors } from '../assets/assets'

const MyAppointments = () => {
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700  border-b  '>My Appointments</p>
      <div>
        {
          doctors.slice(0,4).map((item, index) => (
            <div className='grid grid-col-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b ml-5' key={index}>
              <div>
                <img className='w-32 bg-indigo-50' src={item.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Adress:</p>
                <p className='text-xs'>{item.address.line1}</p>
                <p className='text-xs'>{item.address.line2}</p>
                <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span>27, jan , 2025 | 9:00 AM</p>
              </div>
              <div></div>
              <div className='flex flex-col justify-end gap-2 mr-10'> 
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appoitment</button>
              </div>
            </div>

           ) )}
      </div>
    </div>
  )
}

export default MyAppointments
