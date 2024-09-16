import React from 'react'
import Button from './Button'
 import '../Components/Style/Herosection.css'

const HeroSection = () => {
    return (
        <div className="hero-main">
            <div className="container">
                <div className="heading">
                    <h1>Axis Model <span>3</span></h1>
                </div>
                <div className="herobutton">
                    <Button />
                </div>
            </div>
        </div>
    )
}
export default HeroSection