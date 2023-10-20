import React from 'react'
import img from '../assets/searchlogo.svg'
import Sidebar from '../constants/Sidebar'


const ResearchPaper = () => {
  return (
    <>
    <Sidebar></Sidebar>
    <div className='bg-slate-100 h-screen w-[106.55rem] absolute left-[20rem] top-[16vh] px-[6rem] grid grid-cols-1'>
 
     <div className='flex items-center'>
       <div className='w-[5rem] h-[3rem] bg-white flex items-center justify-center rounded-l-full'>
       <img src={ img } className='w-[30px] h-[30px]  bg-white' alt="" /></div>
       <input type="search" name="" id=""  className='w-[20rem] border border-transparent hover:border-transparent focus:outline-none h-[3rem] rounded-r-full' placeholder='Search Here ...'/>
     </div>
        
        <div className='grid grid-cols-4'>
 
         <div className='bg-blue-300 rounded-3xl shadow-inner shadow-2xl w-[13rem] h-[16rem] mt-[4rem]'></div>
         <div className='bg-blue-300 rounded-3xl shadow-inner shadow-2xl w-[13rem] h-[16rem] mt-[4rem]'></div>
         <div className='bg-blue-300 rounded-3xl shadow-inner shadow-2xl w-[13rem] h-[16rem] mt-[4rem]'></div>
         <div className='bg-blue-300 rounded-3xl shadow-inner shadow-2xl w-[13rem] h-[16rem] mt-[4rem]'></div>
         <div className='bg-blue-300 rounded-3xl shadow-inner shadow-2xl w-[13rem] h-[16rem] mt-[4rem]'></div>
         <div className='bg-blue-300 rounded-3xl shadow-inner shadow-2xl w-[13rem] h-[16rem] mt-[4rem]'></div>
         <div className='bg-blue-300 rounded-3xl shadow-inner shadow-2xl w-[13rem] h-[16rem] mt-[4rem]'></div>
 
        </div>
    
 
    </div>
    </>
  )
}

export default ResearchPaper