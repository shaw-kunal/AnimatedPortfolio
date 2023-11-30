import React, { useState } from 'react';

const HamburgerButton = ({setOpen,open}) => {


  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <button onClick={toggleMenu}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="5"
          y1="10"
          x2="25"
          y2="10"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          transform={open ? 'rotate(45 15 15)' : ''}

        />
        <line
          x1="5"
          y1="15"
          x2="25"
          y2="15"
          stroke="black"
          strokeWidth="2"
          opacity={open ? 0 : 1}
        />
        <line
          x1="5"
          y1="20"
          x2="25"
          y2="20"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          transform={open ? 'rotate(-45 15 15)' : ''}

        />
      </svg>
    </button>
  );
};

export default HamburgerButton;
