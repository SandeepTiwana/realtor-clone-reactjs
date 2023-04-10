import React, { useState } from 'react'

import {Link}from "react-router-dom";
import OAuth from '../components/OAuth';

const ForgotPassword = () => {

  const [email, setEmail] = useState(""
  )

  function onChange(e){
    setEmail(e.target.value)
  }
 

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold items-center px'>Forgot Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="sign in image" className='w-full rounded-2xl' />
        </div>
        <div className=' w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form >
            
            <input type="email" id='email' value={email}  onChange={onChange} placeholder='email address' className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6'/>
            
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'> don't have an account? 
                <Link to="/SignUp" className='text-red-600 hover:text-red-800 transition duration-200 ease-in-out'> Register</Link>
              </p>
              <p>
                <Link to="/SignIn" className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Sign In Instead</Link>
              </p>
            </div>
            <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800' type="submit">send reset link</button>
            <div className='my-4 flex items-center before:border-t before:border-gray-300 before:flex-1 after:border-t after:border-gray-300 after:flex-1 '>

              <p className='text-center uppercase font-semibold mx-4'>or</p>
            </div>
            <OAuth/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword