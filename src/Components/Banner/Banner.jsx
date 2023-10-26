import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import bannerImage1 from '../../assets/images/banner/1.jpg'
import bannerImage2 from '../../assets/images/banner/2.jpg'
import bannerImage3 from '../../assets/images/banner/3.jpg'
import bannerImage4 from '../../assets/images/banner/4.jpg'
import bannerImage5 from '../../assets/images/banner/5.jpg'
import bannerImage6 from '../../assets/images/banner/6.jpg'

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='max-w-7xl mx-auto z-0'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='z-0'>
          <div className='relative z-0'>
            <img className='rounded-lg h-[80vh] w-full object-cover' src={bannerImage1} alt="banner-image" />
            <div className='absolute flex items-center top-0 left-0 h-full w-full rounded-lg p-2 bg-gradient-to-r from-gray-800 '>
              <div className='lg:ml-10'>
                <h1 className='text-5xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
                <p className='text-lg text-white max-w-[522px] my-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='flex gap-2'>
                  <button className='btn bg-[#FF3811] hover:bg-[#ff3911e3] text-white outline-none border-none'>Discover More</button>
                  <button className='btn border-[#FF3811] hover:bg-[#FF3811] text-white btn-outline '>Latest Project</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img className='rounded-lg h-[80vh] w-full object-cover' src={bannerImage2} alt="banner-image" />
            <div className='absolute flex items-center top-0 left-0 h-full w-full rounded-lg p-2 bg-gradient-to-r from-gray-800 '>
              <div className='lg:ml-10'>
                <h1 className='text-5xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
                <p className='text-lg text-white max-w-[522px] my-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='flex gap-2'>
                  <button className='btn bg-[#FF3811] hover:bg-[#ff3911e3] text-white outline-none border-none'>Discover More</button>
                  <button className='btn border-[#FF3811] hover:bg-[#FF3811] text-white btn-outline '>Latest Project</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img className='rounded-lg h-[80vh] w-full object-cover' src={bannerImage3} alt="banner-image" />
            <div className='absolute flex items-center top-0 left-0 h-full w-full rounded-lg p-2 bg-gradient-to-r from-gray-800 '>
              <div className='lg:ml-10'>
                <h1 className='text-5xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
                <p className='text-lg text-white max-w-[522px] my-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='flex gap-2'>
                  <button className='btn bg-[#FF3811] hover:bg-[#ff3911e3] text-white outline-none border-none'>Discover More</button>
                  <button className='btn border-[#FF3811] hover:bg-[#FF3811] text-white btn-outline '>Latest Project</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img className='rounded-lg h-[80vh] w-full object-cover' src={bannerImage4} alt="banner-image" />
            <div className='absolute flex items-center top-0 left-0 h-full w-full rounded-lg p-2 bg-gradient-to-r from-gray-800 '>
              <div className='lg:ml-10'>
                <h1 className='text-5xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
                <p className='text-lg text-white max-w-[522px] my-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='flex gap-2'>
                  <button className='btn bg-[#FF3811] hover:bg-[#ff3911e3] text-white outline-none border-none'>Discover More</button>
                  <button className='btn border-[#FF3811] hover:bg-[#FF3811] text-white btn-outline '>Latest Project</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img className='rounded-lg h-[80vh] w-full object-cover' src={bannerImage5} alt="banner-image" />
            <div className='absolute flex items-center top-0 left-0 h-full w-full rounded-lg p-2 bg-gradient-to-r from-gray-800 '>
              <div className='lg:ml-10'>
                <h1 className='text-5xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
                <p className='text-lg text-white max-w-[522px] my-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='flex gap-2'>
                  <button className='btn bg-[#FF3811] hover:bg-[#ff3911e3] text-white outline-none border-none'>Discover More</button>
                  <button className='btn border-[#FF3811] hover:bg-[#FF3811] text-white btn-outline '>Latest Project</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img className='rounded-lg h-[80vh] w-full object-cover' src={bannerImage6} alt="banner-image" />
            <div className='absolute flex items-center top-0 left-0 h-full w-full rounded-lg p-2 bg-gradient-to-r from-gray-800 '>
              <div className='lg:ml-10'>
                <h1 className='text-5xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
                <p className='text-lg text-white max-w-[522px] my-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='flex gap-2'>
                  <button className='btn bg-[#FF3811] hover:bg-[#ff3911e3] text-white outline-none border-none'>Discover More</button>
                  <button className='btn border-[#FF3811] hover:bg-[#FF3811] text-white btn-outline '>Latest Project</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
