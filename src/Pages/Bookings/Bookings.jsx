import React, { useContext, useEffect, useState } from 'react'
import Nav from '../../Components/Nav/Nav'
import { AppContext } from '../../AppContext/AppContextProvider'

const Bookings = () => {
  const { user } = useContext(AppContext);
  const [bookings, setBookings] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, [user])
  return (
    <div>
      <Nav />
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-2xl'>Your Bookings: {bookings?.length}</h1>

        <div>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bookings?.map((booking) => {

                  return <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={booking?.imageURL} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{booking?.name}</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div>
                      </div>
                    </td>
                    <td>

                      ${booking?.price}
                    </td>
                    <td>{booking?.date}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">Pending</button>
                    </th>
                  </tr>
                })}

              </tbody>

            </table>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Bookings
