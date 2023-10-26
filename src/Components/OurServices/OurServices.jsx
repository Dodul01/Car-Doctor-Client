import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const OurServices = () => {
  const data = useLoaderData();

  return (
    <div className='lg:mt-[150px] mt-[550px] max-w-7xl mx-auto p-2'>
      <div className='text-center'>
        <h3 className='text-xl mb-2 font-bold text-[#FF3811]'>Service</h3>
        <h1 className='text-4xl mb-3 font-bold'>Our Service Area</h1>
        <p className='text-base mb-4 text-[##737373] max-w-2xl mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
        {data.map((service) => <ServiceCard key={service._id} service={service}/>)}
      </div>
    </div>
  )
}

export default OurServices;