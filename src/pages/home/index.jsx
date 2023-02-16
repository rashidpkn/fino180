import React from 'react'
import { Helmet } from 'react-helmet'
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'
import Screen3 from './components/Screen3'
import Screen4 from './components/Screen4'
function Home() {
  return (
    <div className="">
      <Helmet>
        <title>Home - Fino180</title>
        <meta name="description" content="Fino180 is a website used for Compare and Apply for Loans, Credit Cards, Bank Accounts, and other Investment Solutions." />
      </Helmet>
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
    </div>
  )
}

export default Home