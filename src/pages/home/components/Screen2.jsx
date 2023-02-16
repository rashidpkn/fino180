import React from 'react'

import saving from '../../../asset/images/home/saving.png'
import demat from '../../../asset/images/home/demat.png'
import card from '../../../asset/images/home/card.png'
import investment from '../../../asset/images/home/investment.png'
import other from '../../../asset/images/home/other.png'
import { Link } from 'react-router-dom'


function Screen2() {
    return (
        <section className='p-2 py-5 md:p-[5%] space-y-5'>
            <h2 className='text-5xl font-medium text-center'>Trending Products</h2>
            <div className="flex justify-center items-center gap-3 md:gap-5 flex-wrap">
                <Category title={'Saving Accounts'} url='/saving-accounts' image={saving} />
                <Category title={'Demat Accounts'} url='/demat-accounts' image={demat} />
                <Category title={'Cards'} url='/cards' image={card} />
                <Category title={'Investments'} url='investments' image={investment} />
                <Category title={'others'} url='others' image={other} />
            </div>
        </section>
    )
}

export default Screen2

const Category = ({ title, image, url }) => (
    <Link to={url}>
    <div className="p-3 px-5 rounded-xl border bg-white lg:hover:translate-y-5 duration-200 flex flex-col justify-center items-center gap-5">
        <img src={image} className='w-32' alt="" />
        <h3>{title}</h3>
    </div>
    </Link>
    )