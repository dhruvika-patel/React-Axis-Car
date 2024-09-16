import React from 'react'
import Button from './Button'
import '../Components/Style/Service.css'

const Service = () => {
  return (
    <>
      <div className="main-services">

        <div className="container">
          <div className="services-inner">
            <h2>Discover Innovation: <br />
              Your Next Adventure Awaits</h2>
            <p>meticulously engineered to elevate every journey. Each vehicle is a testament to <br />our commitment to performance, safety, and design.</p>
            <div className="services-button">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service