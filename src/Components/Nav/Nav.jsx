import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineMenuAlt3, HiOutlineShoppingBag, HiSearch } from 'react-icons/hi';
import logo from "../../assets/logo.svg"
import { AppContext } from '../../AppContext/AppContextProvider';

const Nav = () => {
  const { user, signOutUser } = useContext(AppContext);

  const handleSignOut = () =>{
    signOutUser()
    .then(()=>{
      alert('signout sucessfuly')
    })
  }
  
  const link = <div className='flex lg:flex-row flex-col'>
    <NavLink className="mx-1 hover:text-[#FF3811] text-base" to='/'>Home</NavLink>
    <NavLink className="mx-1 hover:text-[#FF3811] text-base" to='/about'>About</NavLink>
    <NavLink className="mx-1 hover:text-[#FF3811] text-base" to='/services'>Services</NavLink>
    <NavLink className="mx-1 hover:text-[#FF3811] text-base" to='/blog'>Blog</NavLink>
    <NavLink className="mx-1 hover:text-[#FF3811] text-base" to='/contact'>Contact</NavLink>
    {
      user === null ?
        <NavLink className="mx-1 hover:text-[#FF3811] text-base" to='/signUp'>SignUp</NavLink>
        : <>
          <Link to='/bookings' className='mx-1 lg:bg-transparent lg:p-0 rounded-lg p-2 lg:text-black text-white bg-[#FF3811] lg:hover:text-[#FF3811] text-base'>Bookings</Link>
          <button onClick={handleSignOut} className='mx-1 lg:bg-transparent lg:p-0 rounded-lg p-2 lg:text-black text-white bg-[#FF3811] lg:hover:text-[#FF3811] text-base'>Sign Out</button>
        </>
    }
  </div>

  return (
    <nav className="navbar bg-base-100 max-w-7xl mx-auto z-40">
      <div className="navbar-start">
        <img className='h-[60px]' src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>
      <div className="navbar-end">
        <div className='lg:flex hidden mr-5'>
          <HiOutlineShoppingBag className='text-xl mx-2 cursor-pointer hover:text-[#FF3811]' />
          <HiSearch className='text-xl mx-2 cursor-pointer hover:text-[#FF3811]' />
        </div>
        <a className="btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white border-[#FF3811] text-[#FF3811]">Appointment</a>
        <div className="drawer lg:hidden w-[50px] ml-1 flex items-center justify-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn bg-[#FF3811] hover:bg-[#f85332] text-white m-0 drawer-button"><HiOutlineMenuAlt3 className='text-lg' /></label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-[80%] min-h-full bg-base-200 text-base-content">
              {link}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
