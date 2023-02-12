import React from 'react'

function Screen3() {
  return (
    <div className='p-1 py-5 md:p-[5%] space-y-5 bg-[#eee]'>
        <h2 className='text-5xl font-medium text-center'>Why Choose Us</h2>
        <p className='text-center'>Compare and Apply for Loans, Credit Cards, Bank Accounts, and more</p>
        <div className="flex justify-center items-center gap-3 md:gap-5 flex-wrap text-white">
                <Features gradient={'gradient-blue'} title='Easy To Compare' desc={'You can compare and apply various financial products like bank accounts..credit cards. Loans and more'}/>
                <Features gradient={'gradient-pink'} title='Easy To Apply'   desc={"Sometimes it's very difficult to find apply link. There are many fake links on social media platforms. We ensure the credibility of apply option."}/>
                <Features gradient={'gradient-blue'} title='Latest Updates'  desc={'Interest rates, terms, and conditions change from time to time. We hardly working to provide latest updated information.'}/>
                <Features gradient={'gradient-pink'} title='One platform For Multiple Products' desc={'Savings account, credit card, loan, Demat account...there are multiple financial products available.'}/>
            </div>
    </div>
  )
}

export default Screen3

const Features = ({gradient,title,desc}) => <div className={`${gradient} p-3 h-52 md:h-48  w-44 md:w-56 shadow-lg rounded-xl hover:translate-y-5 duration-200 bg-white space-y-3 md:space-y-5`}>
  <h3 className='text-center text-xl' >{title}</h3>
  <p  className='text-center text-sm opacity-70'>{desc}</p>
</div>