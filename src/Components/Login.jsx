import React, { useState } from 'react'
import Header from './Header'
import {BACK_IMG} from '../utils/constants.js'

const Login = () => {

  const [isSignIn,setSignIn] = useState()
  function handleLoginFrom(){

  }
  function toggleClick(){
    setSignIn(!isSignIn);
  }

  
  return (
<>
      <Header/>
      <div className='absolute className="h-full w-full object-cover" alt="Background"'>
      <img  src={BACK_IMG} />
      </div>
      <div className='relative'>
        
      <form onSubmit={handleLoginFrom} className='bg-black w-3/12 mx-auto right-0 left-0 text-white p-4 bg-opacity-75'>
      <div>
      <h1>{<h1>{isSignIn ? "Sign In" : "Sign Up"}</h1> ? "Sign In" : "Sign Up"}</h1>
      </div>
{!isSignIn &&
      <div >
  <label >UserName</label>
  <input type="text" placeholder='Enter User Name' className='p-2 my-2 w-full  '/>
      </div>
}
      <div >
  <label >Email Address</label>
  <input type="email" placeholder='Email Address' className='p-2 my-2 w-full  '/>
      </div>
      <div>
  <label>Password</label>
  <input type="password" placeholder='Enter your Password' className='p-2 my-2 w-full'/>
      </div>
      <button type="submit"className='p-4 my-4 text-black w-full bg-red-700 rounded-lg  '>{isSignIn ? "Sign In" : "Sign Up"}</button>

      <p onClick={toggleClick}>{isSignIn ? "New to Netfix? SignUpNow" : "Already registered Sign up now "}</p>
      </form>

   
      </div>
      </>
  ) 
}

export default Login
