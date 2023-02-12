import React from 'react'

function Screen2() {
    return (
        <div className='p-[5%] space-y-5'>
            <h2 className='text-5xl font-medium text-center'>Trending Products</h2>
            <div className="flex justify-center items-center gap-5 flex-wrap">
                <div className="h-44 w-44 shadow-lg rounded-xl hover:translate-y-5 duration-200 hover:border border-black bg-[#eee]"></div>
                <div className="h-44 w-44 shadow-lg rounded-xl hover:translate-y-5 duration-200 hover:border border-black bg-[#eee]"></div>
                <div className="h-44 w-44 shadow-lg rounded-xl hover:translate-y-5 duration-200 hover:border border-black bg-[#eee]"></div>
                <div className="h-44 w-44 shadow-lg rounded-xl hover:translate-y-5 duration-200 hover:border border-black bg-[#eee]"></div>
                <div className="h-44 w-44 shadow-lg rounded-xl hover:translate-y-5 duration-200 hover:border border-black bg-[#eee]"></div>
            </div>
        </div>
    )
}

export default Screen2