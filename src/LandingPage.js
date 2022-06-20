import React from 'react'
import Banner from './Banner.js';
import Header from './Header.js';
import Collections from './Collections.js';



function LandingPage() {
  return (
    <div className='landing'>
          <Header/>
          <Banner/> 
          <Collections/>
    </div>
  )
}

export default LandingPage