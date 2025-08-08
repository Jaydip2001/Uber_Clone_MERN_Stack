import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='h-screen pt-8  flex justify-between flex-col w-full bg-amber-700 bg-[url("https://images.unsplash.com/photo-1612966808160-87a819e0af82?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center'>
    <img className='w-16 ml-8  ' src="https://www.edigitalagency.com.au/wp-content/uploads/new-Uber-logo-white-png-medium-size.png" alt="" />
      <div className='bg-amber-50 py-5 pb-7   px-4'>
        <h2 className='text-2xl font-bold '>Get Started with Uber </h2>
        <Link to={'/login'} className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>continus</Link>
        </div>
    </div>
  )
}

export default Home
