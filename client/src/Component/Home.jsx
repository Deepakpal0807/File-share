import React from 'react'
import {lazy} from 'react';
import { useNavigate } from "react-router-dom";

const send=lazy(()=>import('./send'))


const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-[url(./bc/bcg2.avif)] w-[100vw] h-[100vh] bg-cover bg-center flex items-center justify-center'>
      
      {/* Main Box with Glass Effect */}
      <div className='relative border border-black w-[90vw] lg:w-[50%] md:w-[75vw] h-[80vh] md:h-[60vh] lg:h-[50vh] bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-8 flex items-center justify-evenly'>
        
        {/* App Name with Glass Effect (Top Left) */}
        <div className='absolute top-4 left-4 bg-white bg-opacity-30 backdrop-blur-md text-indigo-500 font-bold text-2xl p-2 px-4 rounded-lg shadow-lg'>
          File Transfer App
        </div>

        {/* Inside Two Boxes */}
        <div className='w-[45%] h-[70%] bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center rounded-lg text-white cursor-pointer' onClick={()=>{navigate('/send')}}>
          <p className='text-xl font-bold'>Send File</p>
        </div>

        <div className='w-[45%] h-[70%] bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center rounded-lg text-white cursor-pointer' onClick={()=>{
          navigate('/receive')
        }}>
          <p className='text-xl font-bold'>Receive File</p>
        </div>

      </div>
    </div>
  )
}

export default Home