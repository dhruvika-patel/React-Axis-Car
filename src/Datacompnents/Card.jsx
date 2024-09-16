import React from 'react';
// import './Card.css';
import '../Components/Style/Facility.css'

const Card = ({ Facilityprops }) => {
  return (
    <>

      <div className='facility-container' style={{ display: 'flex', gap: 38, margin: '150px 0'  }}>
        {Facilityprops.map((Facilitymap) => (
          <div key={Facilitymap.id}>
            <div>
              <h4 style={number}>{Facilitymap.Number}</h4>
              <h4 style={heading}>{Facilitymap.heading}</h4>
              <p style={contant}>{Facilitymap.contant}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Card

const number = {
  fontSize: '40px',
  fontWeight: '400',
  lineHeight: '45px',
  color: '#A5EFFF',
};

const heading = {
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
  margintop: '8px',
  marginBottom: '8px',
  color: 'white'

};

const contant = {
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
  color: 'white'
};


