import React from 'react'
import { useState } from 'react';
import { cookies } from '../data';

export default function CookiePopUp() {
    const [show, setShow] = useState(true);
    const { image } = cookies;
  return (
    <div className={show ? 'w-[95vw] shadow-2xl rounded-2xl bg-white z-30 fixed w-[300px] bottom-5 left-5' : 'hidden'}>
        <img src={image.type} alt='' className='rounded-t-2xl' />
        <div className='flex flex-col'>
            <div className='w-full flex flex-row justify-center my-5'>                
                <div className='font-bold text-xl'>We use cookies !</div>
            </div>
            <div className='w-full flex flex-row justify-end'>
                <button onClick={() => {setShow(false);}} className='text-white shadow-xl bg-blue-800 rounded-xl px-5 py-1 mr-2 mb-2'>OK</button>
            </div>
        </div>
    </div>
  )
}