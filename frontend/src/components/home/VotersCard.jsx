import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import VoterSingleCard from './VoterSingleCard';
import React from 'react';

const VotersCard = ({ voters }) => {
    return (
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {voters.map((item) => (
          <VoterSingleCard key={item._id} voter={item} />
        ))}
      
      </div>
    );
  };

export default VotersCard;
