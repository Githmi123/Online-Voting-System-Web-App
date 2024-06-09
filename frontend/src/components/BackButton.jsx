import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import "./BackButton.css";
import React from 'react';

const BackButton = ({ destination = '/login' }) => {
  return (
    <div /* className='flex' */>
      <Link
        to={destination} id = "button" style={{top:"400px",left:"600px",height:"39px"}}
        // className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
      >
        Back to Login
        {/* <BsArrowLeft className='text-2xl' /> */}
      </Link>
    </div>
  );
};

export default BackButton;