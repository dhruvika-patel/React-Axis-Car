import React from 'react'
import '../Components/Style/Carcollection.css'

const Carcollection = () => {
    return (
        <div className="main-car-collection">
            <div className="container">
                <div className="inner-car-data">
                    <h2>Your Ultimate Driving Experience<br />Begins Here</h2>

                    <p> where each vehicle is meticulously crafted to elevate your driving experience
                        <br />to unparalleled levels of luxury and performance.</p>
                </div>
                <div className="car-collection-vidio">
                    <div className="scorll-image">
                        <img src="./images/carvidio2.gif" alt="" />
                        <img src="./images/carvidio3.gif" alt="" />
                        <img src="./images/carvidio1.gif" alt="" />
                        <img src="./images/carvidio2.gif" alt="" />
                    </div>
                    
                    <div className="scroll-text">
                        <h4>Convertible Elegance</h4>
                        <p>Top-down luxury, combining style with exhilarating open-air experiences.</p>

                        <h4>Grand Tourers</h4>
                        <p>Luxurious grand tourers for long-distance comfort and performance.</p>

                        <h4>Convertible Elegance</h4>
                        <p>Top-down luxury, combining style with exhilarating open-air experiences.</p>

                        <h4>Convertible Elegance</h4>
                        <p>Top-down luxury, combining style with exhilarating open-air experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carcollection