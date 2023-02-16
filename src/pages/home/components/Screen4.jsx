import React from 'react'

function Screen4() {
    return (
        <section className='p-[5%] space-y-5'>
            <div className="flex justify-between items-center">
                <h2 className='text-5xl font-medium'>Blogs</h2>
                <button className='px-5 py-2 border rounded-md text-blue-700'>Views More</button>
                
            </div>
            <div className="flex justify-center items-center gap-5 flex-wrap">
                    <div className="w-80 h-20 border bg-[#eee] rounded-lg"></div>
                    <div className="w-80 h-20 border bg-[#eee] rounded-lg"></div>
                    <div className="w-80 h-20 border bg-[#eee] rounded-lg"></div>
                    <div className="w-80 h-20 border bg-[#eee] rounded-lg"></div>        
                </div>
        </section>
    )
}

export default Screen4