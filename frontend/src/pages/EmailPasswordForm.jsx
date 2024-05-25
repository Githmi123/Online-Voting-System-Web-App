import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import "./EmailPasswordForm.css";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const EmailPasswordForm = () => {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [dOB, setDOB] = useState('');
    // const [nIC, setNIC] = useState('');
    // const [contactNumber, setContactNo] = useState('');
    // const [stakeholderRole, setStakeholderRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
//     setLoading(true);
//     axios.get(`http://localhost:5555/voters/${id}`)
//     .then((response) => {
//         // setFirstName(response.data.firstName);
//         // setLastName(response.data.lastName);
//         // setDOB(response.data.dOB);
//         // setNIC(response.data.nIC);
//         // setContactNo(response.data.contactNumber);
//         // setStakeholderRole(response.data.stakeholderRole);
//         setEmail(response.data.email);
//         setPassword(response.data.password);
//         setLoading(false);
//       }).catch((error) => {
//         setLoading(false);
//         alert('An error happened. Please Chack console');
        
//         console.log(error);
//       });
//   }, [])
  
  const handleEditVoter = async () => {
    if (!id) {
        return; // Add a check to ensure that the id is available before proceeding
      }
    if(password != rePassword){
        enqueueSnackbar('Please enter the same Password again!', { variant: 'error' });
        return;
    }
    
    if (!email || !password) {
      enqueueSnackbar('Please enter email and password!', { variant: 'error' });
      return;
    }

    const data = {
        
        email,
        password
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/voters/emailandpassword/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Voter Edited successfully', { variant: 'success' });
        // navigate(`/voters/details/${id}`);
        navigate(`/registrationsuccessful/${id}`);
      })
      .catch((error) => {
        setLoading(false);
        alert('Please enter details of all the required fields!');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });

  //   try {
  //     const hashedPassword = await bcrypt.hash(password, 10);

  //     const data = {
  //         email,
  //         password: hashedPassword, // Store the hashed password
  //     };

  //     setLoading(true);
  //     axios
  //         .put(`http://localhost:5555/voters/emailandpassword/${id}`, data)
  //         .then(() => {
  //             setLoading(false);
  //             enqueueSnackbar('Voter Edited successfully', { variant: 'success' });
  //             navigate(`/registrationsuccessful/${id}`);
  //         })
  //         .catch((error) => {
  //             setLoading(false);
  //             alert('Please enter details of all the required fields!');
  //             enqueueSnackbar('Error', { variant: 'error' });
  //             console.log(error);
  //         });
  // } catch (error) {
  //     console.log(error.message);
  // }
  
    }



      return (
        <div id="box" style={{borderRadius:"30px",top:"50px",left: "400px", height:"650px", width:"860px"}}>
                    <div id = "heading">
                        Register through your email
                    </div>
        




            <Link to="/">
                    <button class = "cancel" style={{top: '570px', width: '120px', left: '220px', textAlign: 'center'}}>
                    Cancel
                    </button>
            </Link>
        <div className='p-4'>
          {/* <BackButton /> */}
          {/* <h1 className='text-3xl my-4'>Edit Voter</h1> */}
          {loading ? <Spinner /> : ''}
          {/* <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'> */}
            {/* <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>First Name</label>
              <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2 w-full' style={{color:"black"}}
              />
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>Last Name</label>
              <input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} style={{color:"black"}}
                className='border-2 border-gray-500 px-4 py-2  w-full '
              />
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>DOB</label>
              <input
                type='text'
                value={dOB}
                onChange={(e) => setDOB(e.target.value)} style={{color:"black"}}
                className='border-2 border-gray-500 px-4 py-2  w-full '
              />
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>NIC *</label>
              <input
                type='text'
                value={nIC}
                onChange={(e) => setNIC(e.target.value)} style={{color:"black"}}
                className='border-2 border-gray-500 px-4 py-2  w-full '
              />
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>Contact No</label>
              <input
                type='text'
                value={contactNumber}
                onChange={(e) => setContactNo(e.target.value)} style={{color:"black"}}
                className='border-2 border-gray-500 px-4 py-2  w-full '
              />
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>Stakeholder Role</label>
              <input
                type='text'
                value={stakeholderRole}
                onChange={(e) => setStakeholderRole(e.target.value)} style={{color:"black"}}
                className='border-2 border-gray-500 px-4 py-2  w-full '
              />
            </div> */}
    
            <div className='my-4'>
              <label class = "TextName">Email Address *</label>
              <input
                type='text' 
                value={email}
                onChange={(e) => setEmail(e.target.value)} style={{color:"black"}}
                class="TextBox"
              />
            </div>

            <div class = "smallText">
                        This will be used as your email address for Future Logins and Votings
                    </div>
    
            <div className='my-4'>
              <label class = "TextName" style={{top: '275px'}}>Password *</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} style={{color:"black", top: '325px'}}
                class="TextBox" 
              />
            </div>

            <div class = "smallText" style={{top: '377px'}}>
                        Password must contain more than 8 characters. Tip: include digits and special characters for better security.
            </div>

            <div class = "TextName" style={{top: '400px'}}>
                        Re-enter Password
            </div>

            <input class="TextBox" type='password' value={rePassword} onChange={(e) => setRePassword(e.target.value)} style={{color:"black",top: '448px'}}/>
            <div class = "smallText" style={{top: '500px'}}>
                Confirm your password.
            </div>
                    

            <button class = "cancel" style={{top: '570px', width: '120px', left: '500px', textAlign: 'center', backgroundColor: '#8AB5E5'}} onClick={handleEditVoter}>
              Register
            </button>
          {/* </div> */}
        </div>
        </div>
      )
  };

  


export default EmailPasswordForm
