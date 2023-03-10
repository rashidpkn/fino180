import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from '../asset/images/common/logo.png'
import { cards, dematAccount, interestRate, inverstments, loan, savingAccount } from '../custom/Navbar'

function Navbar() {
    const [menu, setMenu] = useState(false)
    return (
        <header className='sticky top-0 border-b z-50 bg-white'>
            <nav className=' hidden lg:flex h-20  w-full px-[5%] items-center justify-between'>
                <div className="">
                    <img src={logo} className='w-28' alt="fino180.in logo" title='fino180.in logo' />
                </div>
                <div className="h-full text-[#666]">
                    <ul className="h-full flex justify-center items-center gap-5">

                        <li className='h-full flex justify-center items-center cursor-pointer group'>
                            <Link to={'/'} title={'Home'}> Home </Link>
                        </li>

                        <li className='h-full flex justify-center items-center cursor-pointer group'>
                            <Link to={'/interest-rate'} title={'Interest Rate'}> Interest Rate </Link>
                            <MegaMenu sub={interestRate} />

                        </li>

                        <li className='h-full flex justify-center items-center cursor-pointer group'>
                            <Link to={'/demat-accounts'} title={'Demat Accounts'}> Demat Accounts </Link>
                            <MegaMenu sub={dematAccount} />
                        </li>

                        <li className='h-full flex justify-center items-center cursor-pointer group'>
                            <Link to={'saving-accounts'} title={'Saving Accounts'}> Saving Accounts </Link>
                            <MegaMenu sub={savingAccount} />
                        </li>

                        <li className='h-full flex justify-center items-center cursor-pointer group'>
                            <Link to={'/cards'} title={'Cards'}> Cards </Link>
                            <MegaMenu sub={cards} />
                        </li>

                        <li className='h-full flex justify-center items-center cursor-pointer group'>
                            <Link to={'/inverstments'} title={'Inverstments'}> Inverstments </Link>
                            <MegaMenu sub={inverstments} />
                        </li>

                        <li className='h-full flex justify-center items-center cursor-pointer group'>
                            <Link to={'/loans'} title={'Loans'}> Loans </Link>
                            <MegaMenu sub={loan} />
                        </li>

                        <li className='h-full flex justify-center items-center cursor-pointer group'>
                            <Link title='Others'> Others </Link>
                        </li>

                        <li className='h-full flex justify-center items-center cursor-pointer group'>
                            <Link title='Blogs'> Blogs </Link>
                        </li>

                    </ul>
                </div>
            </nav>

            <nav className='flex lg:hidden'>
                <div className={`${menu ? 'h-full' : 'h-[75px]'} min-h-[75px] duration-500 bg-black/70 fixed z-50 text-white w-full`}>
                    <div className="flex justify-end items-center w-full h-[75px] px-[5%] bg-black">
                        <button onClick={() => setMenu(!menu)}>
                            <img className='float-right ' src="https://codium.in/image/common/hamburger.svg" alt="hamburger" title='hamburger' />
                        </button>
                    </div>
                    <div className={`h-full w-full flex-col justify-center items-center text-2xl  gap-5 ${menu ? 'flex' : 'hidden'}`}>
                        <NavLink to={'/'} title={'Home'}> Home </NavLink>
                        <NavLink to={'#'} title={'Saving Account'}> Saving Account </NavLink>
                        <NavLink to={'#'} title={'Demat Account'}> Demat Account </NavLink>
                        <NavLink to={'#'} title={'Interest Rate'}> Interest Rate </NavLink>
                        <NavLink to={'#'} title={'Inverstments'}> Inverstments </NavLink>
                        <NavLink to={'#'} title={'Others'}> Others </NavLink>
                        <NavLink to={'#'} title={'Cards'}> Cards </NavLink>
                        <NavLink to={'#'} title={'Blogs'}> Blogs </NavLink>
                    </div>
                </div>
            </nav>
            <div className="block lg:hidden h-[75px]"></div>
        </header>
    )
}

export default Navbar

const MegaMenu = ({ sub }) => {
    return (
        <div className="fixed top-20 left-0 h-0 w-screen  group-hover:h-96  duration-500 overflow-hidden bg-[#EEEEEE]">
            <div className="flex flex-wrap gap-5 p-[5%]">
                {
                    sub.map(e => <Link to={e.url}><div style={{backgroundImage:`url(${e.image})`}} className="bg-cover hover:translate-y-5 duration-500 h-32 w-32 border border-[#666] rounded-xl hover:rounded-md flex text-center justify-center items-center text-black font-semibold text-lg bg-center">{e.title}</div></Link>)
                }
            </div>
        </div>
    )
}