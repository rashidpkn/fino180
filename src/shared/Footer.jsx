import React from 'react'

function Footer() {
  return (
    <div className='bg-[#2b2b2b] p-[5%]  space-y-10 text-[#eee]'>

      <div className="flex justify-center flex-wrap gap-y-10">
        
        <div className="w-full md:w-1/2 lg:w-1/4 space-y-5">
          <h2>Follow our Socials</h2>
          <div className="flex gap-5">
            <div className="w-12 h-12 bg-white "></div>
            <div className="w-12 h-12 bg-white "></div>
            <div className="w-12 h-12 bg-white "></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4">
          <ul className='space-y-3'>
            <li>Home Loan</li>
            <li>Car Loan</li>
            <li>Education Loan</li>
            <li>Personal Loan</li>
          </ul>
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/4">
        <ul className='space-y-3'>
            <li>Demat Accounts</li>
            <li>Saving Accounts</li>
            <li>Cards</li>
            <li>Investment</li>
          </ul>
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/4">
          <ul className='space-y-3'>
            <li>Fixed Deposit</li>
            <li>Other Investment Options</li>
            <li>Home</li>
            <li>Blog</li>
          </ul>
        </div>

      </div>
      <hr />

      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <p>Copyright © 2023 All Rights Reserved</p>
        <div className="flex gap-5">
          <p>Disclaimer</p>
          <p> Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer