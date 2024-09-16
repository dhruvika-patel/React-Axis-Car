import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const navbutton = {
    background: ' transparent',
    padding: '12px 36px',
    border: '1px solid white',
    fontweight: '300',
    lineheight: '12px',
    fontSize: '12px',
    display: 'flex',
    alignitem: 'center',
    justifycontant: 'center'
}

const Navbtn = () => {
    return (
        <>
            <button style={navbutton}>
                <a href="">Contact us
                    <GoArrowUpRight />
                </a>
            </button>
        </>
    )
}

export default Navbtn;