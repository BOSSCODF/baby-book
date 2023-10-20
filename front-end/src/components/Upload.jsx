import React from 'react'
import Sidebar from '../constants/Sidebar'

const Upload = () => {
  return (
    <>
    <Sidebar></Sidebar>
    <div className="w-[48rem] h-[755px] absolute top-[11rem] left-[45rem]">
    <div className="w-[48rem] h-[755px] left-0 top-0 absolute bg-white rounded-[54px] shadow border" />
    <div className="left-[193.51px] top-[551.58px] absolute text-black text-sm font-medium ]">Limited Edition Upload (ERC 721 - NFT)</div>
    <div className="w-[21.29px] h-[21.29px] left-[161px] top-[550px] absolute rounded-full border border-stone-400" />
    <div className="w-[21.29px] h-[21.29px] left-[161px] top-[583px] absolute rounded-full border border-stone-400" />
    <div className="w-[16.29px] h-[16.29px] left-[163.50px] top-[552.67px] absolute bg-stone-400 rounded-full" />
    <div className="left-[193.51px] top-[583.07px] absolute text-black text-sm font-medium ]">Normal E-book Upload (ERC 1155 Token)</div>
    <div className="w-[445px] h-[45px] px-3.5 py-[9px] left-[155px] top-[648px] absolute bg-stone-400 rounded-[32px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-sm font-bold  uppercase leading-[18px]">Upload Files</div>
    </div>
    <div className="w-24 h-7 px-2.5 left-[329px] top-[35px] absolute justify-start items-start gap-2.5 inline-flex">
        <div className="text-center text-stone-950 text-[22px] font-bold ">Upload</div>
    </div>
    <div className="w-[445px] h-[202px] left-[154px] top-[93px] absolute">
        <div className="w-[445px] h-[202px] left-0 top-0 absolute bg-purple-50 rounded border border-blue-800 border-opacity-30" />
        <div className="p-[5px] left-[112px] top-[110px] absolute justify-start items-start gap-2.5 inline-flex">
            <div className="text-center"><span className="text-stone-950 text-base font-bold leading-normal">Drag & drop files or</span><span className="text-zinc-800 text-base font-bold  leading-normal"> </span><span className="text-stone-400 text-base font-bold '] underline leading-normal">Browse</span></div>
        </div>
        <div className="p-[5px] left-[35px] top-[144px] absolute justify-start items-start gap-2.5 inline-flex">
            <div className="text-center text-stone-500 text-xs font-normal  leading-[18px]">Supported formates: epub/PDF (for ebook) & jpg (for cover design)</div>
        </div>
        <div className="w-[68.78px] h-[59.59px] left-[188px] top-[30px] absolute">
            <div className="w-[9.64px] h-[15px] left-[29.81px] top-[34.19px] absolute">
            </div>
        </div>
    </div>
    <div className="w-[136px] h-[18px] left-[154px] top-[315px] absolute justify-start items-start gap-2.5 inline-flex">
        <div className="text-center text-stone-500 text-sm font-bold ">Uploading - 1/1 files</div>
    </div>
    <div className="w-[65px] h-[18px] left-[154px] top-[408px] absolute justify-start items-start gap-2.5 inline-flex">
        <div className="text-center text-stone-500 text-sm font-bold ">Uploaded</div>
    </div>
    <div className="w-[445px] h-[112.37px] left-[154px] top-[343px] absolute">
        <div className="w-[445px] h-9 left-0 top-0 absolute bg-white rounded border border-neutral-200" />
        <div className="w-[109px] h-[18px] left-[10px] top-[8px] absolute justify-start items-start gap-2.5 inline-flex">
            <div className="text-center text-stone-950 text-xs font-normal  leading-[18px]">Atomic Habits.epub</div>
        </div>
        <div className="w-[275px] h-[3px] left-0 top-[34px] absolute bg-indigo-800 rounded-[10px]" />
    </div>
    <div className="left-[289px] top-[703px] absolute text-black text-sm font-normal Gothic'] capitalize leading-[18px]">Powered by spheron network</div>
    <div className="w-[445px] h-9 left-[154px] top-[438px] absolute">
        <div className="w-[445px] h-9 left-0 top-0 absolute bg-white rounded border border-green-600" />
        <div className="w-[118px] h-[18px] left-[10px] top-[9px] absolute justify-start items-center gap-2 inline-flex">
            <div className="justify-start items-start gap-2.5 flex">
                <div className="text-center text-stone-950 text-xs font-normal  leading-[18px]">document-name.PDF</div>
            </div>
        </div>
    </div>
    <div className="w-[445px] h-9 left-[154px] top-[486px] absolute">
        <div className="w-[445px] h-9 left-0 top-0 absolute bg-white rounded-[15px] border border-black" />
        <div className="w-[106px] h-[18px] left-[10px] top-[9px] absolute justify-start items-center gap-2 inline-flex">
            <div className="justify-start items-start gap-2.5 flex">
                <div className="text-center text-neutral-700 text-xs font-normal  leading-[18px]">Enter variant name</div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Upload