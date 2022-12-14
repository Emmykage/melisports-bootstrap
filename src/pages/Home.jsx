import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Products from '../components/products'

function Home() {
  return (
    <div className='hero'>

  
    <div class="card bg-dark text-white border-0">
    <img src="./assets/banner.jpg" class="card-img" alt="background" height="550px"/>
    <div class="card-img-overlay d-flex flex-column justify-content-center">
      <div className='container'>

     
      <h5 class="card-title display-3 fw-bolder mb-0">New Season Arrival</h5>
      <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
 
    </div>
    </div>
  </div>
  <Products />
  </div>
  )
}

export default Home