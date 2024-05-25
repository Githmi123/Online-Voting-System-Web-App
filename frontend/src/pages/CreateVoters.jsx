import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import "./CreateVoters.css";
import img1 from '../components/Register.png';

const CreateVoters = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dOB, setDOB] = useState('');
  const [nIC, setNIC] = useState('');
  const [contactNumber, setContactNo] = useState('');
  const [stakeholderRole, setStakeholderRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  const handleSaveVoter = () => {
    const data = {
      firstName,
      lastName,
      dOB,
      nIC,
      contactNumber,
      stakeholderRole,
      email,
      password
    };

    setLoading(true);
    axios
      .post(`http://localhost:5555/voters/create`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Voter created successfully', {variant: 'success'});
        navigate('/login');
      })
      .catch((error) => {
        setLoading(false);
        alert('Please enter the required details');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  return (
    <div id = "row">
      <div id ="column" style={{backgroundColor: '#8080A1'}}>
                    <img src={img1} style={{ width: '600px', height: '500px', marginTop: '100px' }}/>
                    
      </div>
      <div id = "column2" style={{ textAlign: 'left'}}>
        <p id = "heading" style={{top: '0', marginTop: '40px',marginLeft: '0px'}}>Hello there, you have few steps ahead to vote...</p>
        <p id = "heading2" style={{top: '0', marginTop: '55px',marginLeft: '0px'}}>Register to cast your vote</p>

    <div className='p-4'>
      <BackButton/>
      {/* <h1 className='text-3xl my-4'>Create Voter</h1> */}
      {loading ? <Spinner /> : ''}
      {/* <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'> */}
        <div className='my-4'>
          <label class = "attribute" style={{top: '0', marginTop: '90px',marginLeft: '0px', fontFamily: 'sans-serif'}}>First Name</label>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            style={{color: 'black'}}
            class="textbox"
          />
        </div>
        <div className='my-4'>
          <label class = "attribute" style={{top: '0', marginTop: '150px',marginLeft: '0px', fontFamily: 'sans-serif'}}>Last Name</label>
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
            style={{color: 'black', top: '63px'}} class="textbox"
          />
        </div>
        <div className='my-4'>
          <label class = "attribute" style={{top: '0', marginTop: '213px',marginLeft: '0px', fontFamily: 'sans-serif'}}>DOB</label>
          <input
            type='text'
            value={dOB}
            onChange={(e) => setDOB(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
            style={{color: 'black', top: '126px'}} class="textbox"
          />
        </div>
        <div className='my-4'>
          <label class = "attribute" style={{top: '0', marginTop: '276px',marginLeft: '0px', fontFamily: 'sans-serif'}}>NIC *</label>
          <input
            type='text'
            value={nIC}
            onChange={(e) => setNIC(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
            style={{color: 'black', top: '189px'}} class="textbox" 
          />
        </div>

        <div className='my-4'>
          <label class = "attribute" style={{top: '0', marginTop: '339px',marginLeft: '0px', fontFamily: 'sans-serif'}}>Contact No</label>
          <input
            type='text'
            value={contactNumber}
            onChange={(e) => setContactNo(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
            style={{color: 'black', top: '252px'}} class="textbox" 
          />
        </div>
        <div className='my-4'>
          {/* <label className='text-xl mr-4 text-gray-500'>Stakeholder Role</label> */}
          <label class = "attribute" style={{top: '0', marginTop: '402px',marginLeft: '0px', fontFamily: 'sans-serif'}}>Stakeholder Role</label>
          <input
            type='text'
            value={stakeholderRole}
            onChange={(e) => setStakeholderRole(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
            style={{color: 'black', top: '315px'}} class="textbox" 
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Email *</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
            style={{color: 'black'}}
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Password *</label>
          <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
            style={{color: 'black'}}
          />
        </div>
        <button /* className='p-2 bg-sky-300 m-8'  */ id = "next" onClick={handleSaveVoter}>
          {/* Save */}
          Next
        </button>
      {/* </div> */}
    </div>
    </div>
    </div>
  )
}

export default CreateVoters
