import React, { useContext, useEffect, useState } from 'react'
import Nav from '../../Components/Nav/Nav'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../AppContext/AppContextProvider';

const CheckOut = () => {
  const { id } = useParams();
  const [service, setService] = useState();
  const { user } = useContext(AppContext);


  const handleOrder = (e) => {
    e.preventDefault();
    const Form = e.target;
    const name = Form.title.value;
    const date = Form.date.value;
    const imageURL = Form.imageURL.value;
    const email = Form.email.value;
    const price = Form.price.value;
    const order = { name, date, imageURL, email , price};

    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          alert('order sucessful')
        }
      })
  }

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
  }, [])

  return (
    <div>
      <Nav />
      <div className='max-w-7xl mx-auto'>
        <form onSubmit={handleOrder} className='border rounded-lg shadow-sm p-4 mx-auto max-w-xl'>
          <h1 className='text-xl text-center my-3'>CheckOut</h1>
          <div className='flex w-full gap-2'>
            <div className='flex-1'>
              <label>Service Name</label><br />
              <input type="text" name='title' placeholder="Type here" defaultValue={service?.title} className="input input-bordered w-full max-w-xs my-2" readOnly />
            </div>
            <div className='flex-1'>
              <label>Date</label><br />
              <input type="date" name='date' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" required />
            </div>
          </div>
          <div className='flex w-full gap-2'>
            <div className='flex-1'>
              <label>Price</label><br />
              <input type="text" name='price' placeholder="Type here" defaultValue={service?.price} className="input input-bordered w-full max-w-xs my-2" readOnly />
            </div>
            <div className='flex-1'>
              <label>Email</label><br />
              <input type="email" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs my-2" readOnly />
            </div>
          </div>
          <div>
            <label>ImageURL</label><br />
            <input type="text" name='imageURL' defaultValue={service?.img} className="input input-bordered w-full my-2" readOnly />
          </div>
          <button className='bg-[#FF3811] w-full text-white rounded-lg font-semibold mt-3 p-2'>Book Now</button>
        </form>
      </div>
    </div>
  )
}

export default CheckOut
