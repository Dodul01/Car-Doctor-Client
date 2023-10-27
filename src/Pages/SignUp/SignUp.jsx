import { Link } from 'react-router-dom'
import signUpImage from '../../assets/images/login/login.svg'
import NavBar from '../../Components/NavBar/NavBar'
import { useContext } from 'react'
import { AppContext } from '../../AppContext/AppContextProvider'

const SignUp = () => {
  const { SignUp } = useContext(AppContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const Form = e.target;
    const email = Form.email.value;
    const password = Form.password.value;
    SignUp(email, password);
  }

  return (
    <div className='relative'>
      <div className='z-40 absolute w-full'>
        <NavBar />
      </div>
      <div className="hero min-h-screen z-0 mt-2">
        <div className="hero-content flex-col lg:flex-row">
          <div className='mr-16 lg:flex hidden'>
            <img src={signUpImage} alt="" />
          </div>
          <div className="card flex-shrink-0 lg:w-full w-[90vw] lg:max-w-sm shadow-lg bg-base-100">
            <form onSubmit={handleSignUp} className="card-body pb-3">
              <h1 className="text-3xl text-center font-bold">SignUp Now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="example@gmail.com" name='email' className="focus:outline-none input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" name='password' className="focus:outline-none input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] hover:bg-[#FF3920] text-white">SignUp</button>
              </div>
            </form>
            <div className='mb-4 px-5'>
              <p className='text-center'>Already have an accout? <Link to='/signIn' className='font-bold underline text-[#FF3920]'>SignIn</Link></p>
              <p className='text-center mb-2'>Continue With</p>
              <hr />
              <button className='btn btn-outline w-full hover:bg-white hover:text-black mt-3'>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
