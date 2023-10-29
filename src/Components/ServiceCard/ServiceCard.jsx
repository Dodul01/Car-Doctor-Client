import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { img, price, title ,_id} = service;

  return (
    <div className='border hover:border-[#FF3811] hover:text-[#FF3811] transition-all rounded-lg p-2'>
      <img className='h-[200px] w-full object-cover rounded-lg' src={img} alt="" />
      <h3 className='text-lg font-bold'>{title}</h3>
      <Link to={`/serviceDetails/${_id}`}>
        <h3 className='flex items-center justify-between font-bold cursor-pointer'><span>Price: ${price}</span> <span className='text-2xl'><BsArrowRightShort /></span></h3>
      </Link>
    </div>
  )
}

export default ServiceCard
