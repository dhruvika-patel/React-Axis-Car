import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import './Style/Button.css';

 const Button = () => {

  return (
    <button className='button'>
      <a href="" style={{ textDecoration: 'none', color: 'white' }}>
        Order Now
        <GoArrowUpRight />
      </a>
    </button>
  );
};

export default Button;
