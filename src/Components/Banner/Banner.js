import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='titile'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            
            </div>
            <h1 className='description'>The Lorm alphabet is a method of tactile signing named after Hieronymus Lorm, who developed it in the late 19th century.  </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}
  
export default Banner
