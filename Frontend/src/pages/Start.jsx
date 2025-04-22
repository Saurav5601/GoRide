import React from 'react'
import logo from '../assets/logo1.jpg';

import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className='bg-cover bg-center bg-[url(https://i.pinimg.com/736x/35/cc/2d/35cc2de88672342369cd6fb25d186aed.jpg)] h-screen pt-8  flex justify-between flex-col w-full bg-red-400'>
        <img src={logo} alt='logo' className='w-16 ml-8'/>
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get Started with GoRide</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5' >Continue</Link>
        </div>
    </div>
  )
}

export default Start