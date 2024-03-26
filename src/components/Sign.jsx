import React from 'react'

import manImg from '../assets/man.jpg'

export default function Sign() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={manImg} alt="" />
      </div>

      <div className='bg-gray-10 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
            <div className=' py-5'>
                <h2 className='text-3xl font-bold text-blue-400 '>Welcome!</h2>
                <p className=' text-blue-300'>Enter details to Login</p>
            </div>
            <div className='flex flex-col py-2'>
                <label>username</label>
                <input className='border p-2' type="text" />
            </div>
            <div className='flex flex-col py-2'>
                <label>password</label>
                <input className='border p-2' type="password" />
            </div>
            <button className='border w-full my-5 bg-blue-400 hover:bg-indigo-500'>Sign in</button>
            <div className='flex justify-between'>
                <p className='flex items-center '><input className='mr-2' type="checkbox" />Remember Me</p>
                <p>create account</p>
            </div>
        </form>
      </div>
    </div>
  )
}
