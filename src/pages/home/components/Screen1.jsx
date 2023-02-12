import React from 'react'
import rightImage from '../../../asset/images/home/right-img.png'
function Screen1() {
  return (
    <div className='lg:h-[calc(100vh-5rem)] w-full bg-[#eee] flex flex-col lg:flex-row justify-between items-center p-[5%]'>
        <div className="space-y-10">
            <h1 className='text-5xl font-semibold'>Compare & Apply</h1>
            <p>Compare and Apply for Loans, Credit Cards, Bank Accounts, <br /> and other Investment Solutions.</p>
            <div className="flex flex-wrap gap-5">
                <div className="w-32 h-32 rounded-xl border bg-white hover:translate-y-5 duration-200"></div>
                <div className="w-32 h-32 rounded-xl border bg-white hover:translate-y-5 duration-200"></div>
                <div className="w-32 h-32 rounded-xl border bg-white hover:translate-y-5 duration-200"></div>
                <div className="w-32 h-32 rounded-xl border bg-white hover:translate-y-5 duration-200"></div>
            </div>
        </div>
        <div className="hidden lg:block">
            <img src={rightImage} alt="" />
        </div>
    </div>
  )
}

export default Screen1