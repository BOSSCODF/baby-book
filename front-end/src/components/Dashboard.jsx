import React from 'react'
import topimg from '../assets/topimg.svg'
import person from '../assets/person.svg'
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
    <div className='flex'>
        <div id="side" className='h-screen w-[24rem] bg-white flex flex-col items-center py-4 '>
          <div className=''>
            <span className='font-bold text-2xl'>Book</span><span className='text-2xl'>Bounty.</span>
          </div>
          <img src={ person } className='h-[8rem] w-[8rem] mt-5' alt="" />

          <span className='text-2xl mt-6'>Devam Savla</span>
          <div className='grid grid-cols-1 gap-3 mt-[4rem]'>

            <div className='w-[20rem] h-[4rem] text-xl flex justify-center items-center font-semibold text-zinc-700 hover:bg-green-200'><NavLink to="/">
              Dashboard
            </NavLink></div>
            <div className='w-[20rem] h-[4rem] text-xl flex justify-center items-center font-semibold text-zinc-700 hover:bg-green-200'><NavLink to="/books">
              Books
            </NavLink></div>
            <div className='w-[20rem] h-[4rem] text-xl flex justify-center items-center font-semibold text-zinc-700 hover:bg-green-200'><NavLink to="/documentaries">
              Documentiries
            </NavLink></div>
            <div className='w-[20rem] h-[4rem] text-xl flex justify-center items-center font-semibold text-zinc-700 hover:bg-green-200'><NavLink to="/shortfilm">
              Short Films
            </NavLink></div>
            <div className='w-[20rem] h-[4rem] text-xl flex justify-center items-center font-semibold text-zinc-700 hover:bg-green-200'><NavLink to="/researchpaper">
              Research Papers
            </NavLink></div>
            <div className='w-[20rem] h-[4rem] text-xl flex justify-center items-center font-semibold text-zinc-700 hover:bg-green-200'><NavLink to="/library">
              Library
            </NavLink></div>
            <div className='w-[20rem] h-[4rem] text-xl flex justify-center items-center font-semibold text-zinc-700 hover:bg-green-200'><NavLink to="/settings"></NavLink>Settings</div>

          </div>
        </div>

        <div id="topimg" className='w-screen h-[10rem]'>
          <img src={ topimg } className='w-screen' alt="" />
        </div>
    </div>
    </>
  )
}

export default Dashboard