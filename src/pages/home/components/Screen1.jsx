import React from 'react'
import rightImage from '../../../asset/images/home/right-img.png'

import saving from '../../../asset/images/home/saving.png'
import demat from '../../../asset/images/home/demat.png'
import card from '../../../asset/images/home/card.png'
import investment from '../../../asset/images/home/investment.png'
import { Link } from 'react-router-dom'

function Screen1() {
  return (
    <section className='lg:h-[calc(100vh-5rem)] w-full bg-[#eee] flex flex-col lg:flex-row justify-between items-center p-2 py-5 md:p-[5%]'>
      <div className="space-y-10">
        <h1 className='text-3xl lg:text-5xl  font-semibold text-center lg:text-left'>Compare & Apply</h1>
        <p className='text-center lg:text-left'>Compare and Apply for Loans, Credit Cards, Bank Accounts, <br /> and other Investment Solutions.</p>
        <div className="flex flex-wrap gap-3 md:gap-5 justify-center md:justify-start">
          <Category title={'Saving Accounts'} url='/saving-accounts' image={saving} />
          <Category title={'Demat Accounts'} url='/demat-accounts' image={demat} />
          <Category title={'Cards'} url='/cards' image={card} />
          <Category title={'Investments'} url='investments' image={investment} />
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={rightImage} alt="" />
      </div>
    </section>
  )
}

export default Screen1


const Category = ({ title, image, url }) => (
  <Link to={url}>

    <div className="p-3 px-5 rounded-xl border bg-white lg:hover:translate-y-5 duration-200 flex flex-col justify-center items-center gap-5">
      <img src={image} className='w-28 lg:w-32' alt="" />
      <h3>{title}</h3>
    </div>
  </Link>
)
