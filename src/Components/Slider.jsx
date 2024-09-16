import React from 'react'
import '../Components/Style/slider.css'


const Slider = () => {
  return (
    <div className="main-slider">
        <div className="container">
            <div className="slider-inner-data">
                <h2>A World of <br />
                Automotive Excellence</h2>
                <p> where each vehicle is meticulously crafted to elevate your driving experience <br />
                to unparalleled levels of luxury and performance.</p>
            </div>

            <div className="slider-images">
                <img src="./images/1.jpg" alt="" />  
                <img src="./images/2.jpg" alt="" />  
                <img src="./images/3.jpg" alt="" />  
                <img src="./images/4.jpg" alt="" />  
            </div>
        </div>
    </div>
  )
}

export default Slider