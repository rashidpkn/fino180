import React from 'react'

function Screen3() {
  return (
    <div className='p-[5%] space-y-5 bg-[#eee]'>
        <h2 className='text-5xl font-medium text-center'>Why Choose Us</h2>
        <p className='text-center'>Compare and Apply for Loans, Credit Cards, Bank Accounts, and more</p>
        <div className="flex justify-center items-center gap-5 flex-wrap">
                <div className="h-44 w-44 shadow-lg rounded-xl hover:translate-y-5 duration-200 hover:border border-black bg-white"></div>
                <div className="h-44 w-44 shadow-lg rounded-xl hover:translate-y-5 duration-200 hover:border border-black bg-white"></div>
                <div className="h-44 w-44 shadow-lg rounded-xl hover:translate-y-5 duration-200 hover:border border-black bg-white"></div>
                <div className="h-44 w-44 shadow-lg rounded-xl hover:translate-y-5 duration-200 hover:border border-black bg-white"></div>
                <div className="h-44 w-44 shadow-lg rounded-xl hover:translate-y-5 duration-200 hover:border border-black bg-white"></div>
            </div>
    </div>
  )
}

export default Screen3