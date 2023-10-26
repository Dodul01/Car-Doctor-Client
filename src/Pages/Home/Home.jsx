import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Banner from '../../Components/Banner/Banner'
import AboutUs from '../../Components/AboutUs/AboutUs'
import OurServices from '../../Components/OurServices/OurServices'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='relative'>
      <div className='absolute top-0 w-full z-40'>
        <Nav />
      </div>
      <div className='z-0 pt-20 mx-2'>
        <Banner />
      </div>
      <AboutUs/>
      <OurServices/>
      <Footer/>
    </div>
  )
}

export default Home
