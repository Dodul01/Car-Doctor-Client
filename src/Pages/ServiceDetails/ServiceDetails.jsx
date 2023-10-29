import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Nav from '../../Components/Nav/Nav';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
  }, []);

  return (
    <div>
      <Nav />
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-2xl font-semibold'>Service Details : {service?.title}</h1>
        <div className='flex lg:flex-row flex-col'>
          <div className='flex-1'>
            <img className='rounded-lg mt-3' src={service?.img} alt="" />
          </div>
          <div className='flex-1 p-2'>
            <h2 className='text-xl font-semibold mb-3'>{service?.title}</h2>
            <p className='text-gray-500'>{service?.description}</p>
            <p className='text-lg font-medium mb-3'>Price: ${service?.price}</p>
            <Link to={`/checkOut/${service?._id}`} className='bg-[#FF3811] w-full p-2 text-white font-semibold rounded-lg mt-3'>Proceed Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
