import React from 'react'
import Sidebar from '../constants/Sidebar'
import { NavLink } from 'react-router-dom'


const Dashboard = () => {
  return (
    <>
      
      <Sidebar></Sidebar>
      <div className='grid grid-cols-2 absolute left-[20.2rem] top-[9.8rem] '>
        <div className='bg-slate-100 h-[45vh] w-[53.85rem] p-[4rem] px-[10rem] py-[5rem]'>

          <div className="w-[359px] h-[105px] text-stone-900 text-5xl font-bold leading-[56.57px]">Good morning,<br />Devam</div>

          <div className="w-[374px] h-10 text-neutral-500 text-base font-normal leading-snug mt-8">Hope you had a great day!</div>

          <button className="w-36 h-12 px-[26px] py-3.5 bg-stone-400 rounded-[36px] mr-4 text-white text-base font-bold justify-center items-center gap-[15px] inline-flex">

          Your Library
          
          </button>

          <button className="w-[210px] h-12 px-[26px] py-3.5 bg-yellow-600 text-white text-base font-bold rounded-[36px] justify-center items-center gap-[15px] inline-flex"><NavLink to="/uploadebook">Upload your E-book</NavLink>
          
          </button>

        </div>


        <div className='bg-slate-100 h-[45vh] w-[53.85rem] flex content-center items-center justify-center'>

          <div className="w-[499px] h-[277px] relative bg-white rounded-[44px] shadow-inner shadow-xl">
            <div className="w-[405px] h-[183px] left-[69px] top-[60px] absolute">
              <div className="w-[165px] h-[21px] left-[240px] top-[136px] absolute text-center text-stone-900 text-xl font-bold">Bounty Bonus</div>
              <div className="w-[131px] h-[15px] left-[257px] top-[168px] absolute text-neutral-500 text-sm font-medium">Going good. Great!</div>
              <div className="w-[162px] h-[155.82px] left-0 top-0 absolute">
                <span className="text-black text-lg font-medium leading-[34.89px] tracking-wide">Make 10 more purchases this month to get a bounty bonus of </span><span className="text-lime-800 text-lg font-medium leading-[34.89px] tracking-wide">200</span><span className="text-black text-lg font-medium leading-[34.89px] tracking-wide"> </span><span className="text-lime-800 text-lg font-medium leading-[34.89px] tracking-wide">Matic</span></div>
            </div>
            <div className="w-[122px] h-[122px] left-[326px] top-[46px] absolute">
              <div className="w-[122px] h-[122px] left-0 top-0 absolute bg-stone-400 rounded-full" />
              <div className="w-[122px] h-[122px] left-0 top-0 absolute bg-stone-400 rounded-full" />
              <div className="w-[122px] h-[122px] left-0 top-0 absolute bg-stone-400 rounded-full" />
              <div className="w-[122px] h-[122px] left-0 top-0 absolute bg-stone-400 rounded-full" />
              <div className="w-[122px] h-[122px] left-0 top-0 absolute bg-stone-400 rounded-full" />
              <div className="w-[122px] h-[122px] left-0 top-0 absolute bg-neutral-200 rounded-full" />
              <div className="w-[122px] h-[122px] left-0 top-0 absolute bg-neutral-200 rounded-full" />
              <div className="w-[122px] h-[122px] left-0 top-0 absolute bg-neutral-200 rounded-full" />
              <div className="w-[122px] h-[122px] left-0 top-0 absolute bg-neutral-200 rounded-full" />
              <div className="w-[122px] h-[122px] left-0 top-0 absolute bg-neutral-200 rounded-full" />
            </div>
          </div>

        </div>
      </div>

      <div className='bg-slate-100 h-[60vh] w-[107rem] absolute left-[20.2rem] top-[36.3rem] grid grid-cols-2 py-[3rem] px-[6rem]'>

      <div className="w-[40rem] h-[468px] relative bg-white rounded-[10px]">
    <div className="left-[24px] top-[21px] absolute text-stone-900 text-[22px] font-semibold']">Purchases</div>
    <div className="w-[37rem] h-[81px] pl-6 pr-[24.44px] pt-[17px] pb-[17.29px] left-[26px] top-[71px] absolute bg-stone-50 rounded-lg justify-center items-center inline-flex">
        <div className="w-[380.56px] h-[46.71px] relative">
            <div className="w-[48.88px] h-[46.71px] pl-3 pr-[11.88px] pt-[13px] pb-[13.79px] left-0 top-0 absolute bg-blue-950   rounded-md justify-center items-center inline-flex">
                <div className="w-[25px] h-[19.92px] relative flex-col justify-start items-start flex" />
            </div>
            <div className="w-[116px] h-5 left-[65px] top-[3px] absolute text-stone-900 text-base font-semibold">Blue & Green</div>
            <div className="w-[63.56px] h-[19.86px] left-[317px] top-[15px] absolute text-stone-900 text-[15px] font-semibold ">$739.65</div>
            <div className="w-[135px] h-[18px] left-[65px] top-[24.71px] absolute text-neutral-500 text-sm font-medium ">Mar 20, 2019 23:14</div>
        </div>
    </div>
    <div className="w-[37rem] h-[81px] px-6 pt-[18px] pb-[16.29px] left-[26px] top-[164px] absolute bg-stone-50 rounded-lg justify-center items-center inline-flex">
        <div className="w-[381px] h-[46.71px] relative">
            <div className="w-[48.88px] h-[46.71px] pl-2.5 pr-[10.88px] pt-[9px] pb-[9.71px] left-0 top-0 absolute bg-red-500 rounded-[5px] justify-center items-center inline-flex">
                <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
            </div>
            <div className="left-[66px] top-[4px] absolute text-stone-900 text-base font-semibold">Love undercover</div>
            <div className="left-[320px] top-[15px] absolute text-stone-900 text-[15px] font-semibold">$589.99</div>
            <div className="left-[66px] top-[24.71px] absolute text-neutral-500 text-sm font-medium">Dec 30, 2019 05:18</div>
        </div>
    </div>
    <div className="w-[37rem] h-[81px] px-6 pt-[18px] pb-[16.29px] left-[26px] top-[258px] absolute bg-stone-50 rounded-lg justify-center items-center inline-flex">
        <div className="w-[381px] h-[46.71px] relative">
            <div className="w-[48.88px] h-[46.71px] pl-[7px] pr-[8.88px] pt-4 pb-[16.71px] left-0 top-0 absolute bg-sky-300 rounded-[5px] justify-center items-center inline-flex">
                <div className="w-[33px] h-3.5 relative flex-col justify-start items-start flex" />
            </div>
            <div className="left-[65px] top-[3px] absolute text-stone-900 text-base font-semibold">48 Hours</div>
            <div className="left-[317px] top-[7px] absolute text-stone-900 text-[15px] font-semibold">$450.54</div>
            <div className="left-[65px] top-[22.71px] absolute text-neutral-500 text-sm font-medium">Feb 2, 2019 19:28</div>
        </div>
    </div>
    <div className="w-[37rem] h-[81px] px-6 pt-[18px] pb-[16.29px] left-[26px] top-[348px] absolute bg-stone-50 rounded-lg justify-center items-center inline-flex">
        <div className="w-[381px] h-[46.71px] relative">
            <div className="w-[48.88px] h-[46.71px] pl-[13px] pr-[13.88px] pt-[13px] pb-[13.67px] left-0 top-0 absolute bg-stone-400 rounded-[5px] justify-center items-center inline-flex">
                <div className="w-[22px] h-5 relative flex-col justify-start items-start flex">
                    <div className="w-[6.72px] h-[6.72px] bg-white rounded-full" />
                </div>
            </div>
            <div className="left-[65px] top-[3px] absolute text-stone-900 text-base font-semibold">Face the nation</div>
            <div className="left-[318px] top-[10px] absolute text-stone-900 text-[15px] font-semibold">$250.54</div>
            <div className="left-[65px] top-[22.71px] absolute text-neutral-500 text-sm font-medium">June 4, 2019 19:28</div>
        </div>
    </div>
    <div className="origin-top-left rotate-90 w-[3.50px] h-[16.50px] left-[452.50px] top-[35px] absolute">
    </div>
      </div>

      
      <div className="w-[817.58px] h-[940px] bottom-[50vh] relative right-[-5rem]">
    <div className="w-[597px] h-[468px]  top-[472px] absolute bg-white rounded-[10px] " />
    <div className="left-[26px] top-[491px] absolute text-stone-900 text-[22px] font-semibold ">Reading now</div>
    <div className="w-[543.25px] h-[361.91px] left-[28px] top-[553px] absolute">
        <div className="w-[258.25px] h-[167.91px] left-0 top-0 absolute bg-blue-50 rounded-[9.83px]" />
        <div className="w-[258.25px] h-[167.91px] left-[285px] top-0 absolute bg-orange-50 rounded-[9.83px]" />
        <div className="w-[139px] h-10 left-[26px] top-[20px] absolute text-stone-900 text-lg font-semibold '] capitalize">Love undercover</div>
        <div className="w-[139px] h-10 left-[303px] top-[20px] absolute text-stone-900 text-lg font-semibold '] capitalize">Red and <br/>Blue</div>
        <div className="w-[87.38px] h-[16.74px] left-[26px] top-[75px] absolute text-neutral-500 text-xs font-medium font-['Plus Jakarta Sans']">by Rose mary</div>
        <div className="w-[101px] h-[17px] left-[303px] top-[75px] absolute text-neutral-500 text-xs font-medium ">by Loreal Benson</div>
        <div className="left-[35.50px] top-[124.50px] absolute text-white text-xs font-medium">Continue</div>
        <div className="w-[258.25px] h-[167.91px] left-[285px] top-[194px] absolute bg-emerald-50 rounded-[9.83px]" />
        <div className="w-[336.38px] h-[60px] left-[163.04px] top-[51.75px] absolute">
            <div className="w-[36.43px] h-[18.79px] left-[14.96px] top-[22.25px] absolute text-neutral-500 text-[13px] font-bold ">30%</div>
            <div className="w-[36.43px] h-[18.79px] left-[299.96px] top-[23.25px] absolute text-neutral-500 text-[13px] font-bold ">10%</div>
            <div className="w-[60px] h-[60px] left-0 top-0 absolute">
                <div className="w-[60px] h-[60px] left-0 top-0 absolute opacity-60 bg-white rounded-full" />
                <div className="w-[60px] h-[60px] left-0 top-0 absolute opacity-60 bg-sky-300 rounded-full" />
            </div>
        </div>
        <div className="w-[76px] h-8 px-[10.28px] py-[8.57px] left-[24px] top-[116px] absolute bg-sky-300 rounded-lg justify-center items-center gap-[8.57px] inline-flex">
            <div className="text-white text-xs font-semibold font-['Plus Jakarta Sans']">Continue</div>
        </div>
        <div className="w-[76px] h-8 px-[10.28px] py-[8.57px] left-[301px] top-[116px] absolute bg-orange-200 rounded-lg justify-center items-center gap-[8.57px] inline-flex">
            <div className="text-white text-xs font-semibold">Continue</div>
        </div>
        <div className="w-[139px] h-10 left-[303px] top-[208px] absolute text-stone-900 text-lg font-semibold capitalize">FBI<br/>Declassified</div>
        <div className="w-[101px] h-[17px] left-[303px] top-[263px] absolute text-neutral-500 text-xs font-medium">by Philip Simon</div>
        <div className="w-[76px] h-8 px-[10.28px] py-[8.57px] left-[301px] top-[312px] absolute bg-stone-400 rounded-lg justify-center items-center gap-[8.57px] inline-flex">
            <div className="text-white text-xs font-semibold font-['Plus Jakarta Sans']">Continue</div>
        </div>
    </div>
    <div className="w-[258.25px] h-[167.91px] left-[28px] top-[748px] absolute">
        <div className="w-[258.25px] h-[167.91px] left-0 top-0 absolute bg-rose-50 rounded-[9.83px]" />
        <div className="w-[139px] h-10 left-[24px] top-[21px] absolute text-stone-900 text-lg font-semibold capitalize">Face the<br/>Nation</div>
        <div className="w-[109px] h-[17px] left-[24px] top-[76px] absolute text-neutral-500 text-xs font-medium font-['Plus Jakarta Sans']">by Robert Patinson</div>
        <div className="w-[76px] h-8 px-[10.28px] py-[8.57px] left-[24px] top-[117px] absolute bg-rose-400 rounded-lg justify-center items-center gap-[8.57px] inline-flex">
            <div className="text-white text-xs font-semibold">Continue</div>
        </div>
        <div className="w-[36.43px] h-[19.63px] left-[179px] top-[75px] absolute text-neutral-500 text-[13px] font-bold">70%</div>
        <div className="w-[60px] h-[60px] left-[163.04px] top-[53.01px] absolute">
            <div className="w-[60px] h-[60px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-[60px] h-[60px] left-0 top-0 absolute bg-rose-400 rounded-full" />
        </div>
    </div>
    <div className="w-[60px] h-[60px] left-[473.04px] top-[605.45px] absolute">
        <div className="w-[60px] h-[60px] left-0 top-0 absolute bg-white rounded-full" />
        <div className="w-[60px] h-[60px] left-0 top-0 absolute bg-orange-200 rounded-full" />
    </div>
    <div className="w-[60px] h-[60px] left-[467.42px] top-[801.02px] absolute">
        <div className="w-[39px] h-[19px] left-[15.58px] top-[21.98px] absolute text-neutral-500 text-[13px] font-bold">50%</div>
        <div className="w-[60px] h-[60px] left-0 top-0 absolute">
            <div className="w-[60px] h-[60px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-[60px] h-[60px] left-0 top-0 absolute bg-stone-400 rounded-full" />
        </div>
    </div>
    <div className="left-[521px] top-[499px] absolute text-neutral-500 text-sm font-medium">View all</div>
</div>
      </div>

      

    </>
  )
}

export default Dashboard