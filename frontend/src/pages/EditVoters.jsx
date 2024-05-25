import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import "./EditVoters.css";
import img1 from '../components/edit.png';
import { Link } from 'react-router-dom';

const EditVoters = () => {
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
  const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const [errorOccurred, setErrorOccurred] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/voters/${id}`)
    .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setDOB(response.data.dOB);
        setNIC(response.data.nIC);
        setContactNo(response.data.contactNumber);
        setStakeholderRole(response.data.stakeholderRole);
        setEmail(response.data.email);
        setPassword(response.data.password);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        
        console.log(error);
      });
  }, [])
  
  const handleEditVoter =async () => {
    if (!nIC || !email || !password) {
      enqueueSnackbar('Please enter NIC, email, and password!', { variant: 'error' });
      return;
    }

    // const data = {
    //     firstName,
    //     lastName,
    //     dOB,
    //     nIC,
    //     contactNumber,
    //     stakeholderRole,
    //     email,
    //     password
    // };
    // setLoading(true);
    // axios
    //   .put(`http://localhost:5555/voters/${id}`, data)
    //   .then(() => {
    //     setLoading(false);
    //     enqueueSnackbar('Voter Edited successfully', { variant: 'success' });
    //     navigate(`/voters/details/${id}`);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     //alert('Please enter details of all the required fields!');
    //     enqueueSnackbar('Error', { variant: 'error' });
    //     console.log(error);
    //   });

    try {
      const userExists = await handleExists();
      
      if (!userExists) {
        const data = {
          firstName,
          lastName,
          dOB,
          nIC,
          contactNumber,
          stakeholderRole,
          email,
          password,
        };
        setLoading(true);
        axios
          .put(`http://localhost:5555/voters/${id}`, data)
          .then(() => {
            setLoading(false);
            enqueueSnackbar('Voter Edited successfully', { variant: 'success' });
            navigate(`/voters/details/${id}`);
          })
          .catch((error) => {
            setLoading(false);
            enqueueSnackbar('Error', { variant: 'error' });
            console.log(error);
          });
      } else {
        enqueueSnackbar('User exists', { variant: 'error' });
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };


  const handleExists = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5555/voters/search/${nIC}`);
      setLoading(false);
      if (response.data) {
        return response.data._id !== id;
    } else {
      return false; // User does not exist
    }
      setLoading(false);
    } catch (error) {
      console.error('Error searching:', error);
      setLoading(false);
    }
  };



  return (
    <div id = "row">
    <div id ="column" style={{backgroundColor: '#8080A1'}}>
        <img src={img1} style={{ width: '300px', height: '300px', marginTop: '170px', marginLeft:"90px" }}/>
        
    </div>
    <div id = "column2" style={{ textAlign: 'left'}}>
    <p id = "heading" style={{top: '0', left:"500px", marginTop: '40px',marginLeft: '0px'}}>Edit my account details ...</p>
    <div className='p-4'>
      {/* <BackButton /> */}
      
      {/* <h1 className='text-3xl my-4'>Edit Voter</h1> */}
      {loading ? <Spinner /> : ''}
      {/* <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'> */}
     
          <label class = "attribute" style={{top: '0', left:"500px", marginTop: '90px',marginLeft: '10px', fontFamily: 'sans-serif'}}>First Name</label>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            /* className='border-2 border-gray-500 px-4 py-2 w-full' */ style={{color: "black", top: '0',width:"500px", marginTop: '120px',marginLeft: '70px', fontFamily: 'sans-serif'}}
          />
        
        <div className='my-4'>
          <label class = "attribute" style={{top: '0',left:"500px", marginTop: '150px',marginLeft: '10px', fontFamily: 'sans-serif'}}>Last Name</label>
          <input
            type='text'
            value={lastName} style={{color: "black",top: '0',width:"500px", marginTop: '20px',marginLeft: '70px', fontFamily: 'sans-serif'}}
            onChange={(e) => setLastName(e.target.value)} 
            // className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label class = "attribute" style={{top: '0', left:"500px",marginTop: '213px',marginLeft: '10px', fontFamily: 'sans-serif'}}>DOB</label>
          <input
            type='text'
            value={dOB}
            onChange={(e) => setDOB(e.target.value)} style={{color: "black",top: '0',width:"500px", marginTop: '20px',marginLeft: '70px', fontFamily: 'sans-serif'}}
            // className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label class = "attribute" style={{top: '0',left:"500px", marginTop: '276px',marginLeft: '10px', fontFamily: 'sans-serif'}}>NIC *</label>
          <input
            type='text'
            value={nIC}
            onChange={(e) => setNIC(e.target.value)} style={{color: "black",top: '0',width:"500px", marginTop: '24px',marginLeft: '70px', fontFamily: 'sans-serif'}}
            // className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label class = "attribute" style={{top: '0', left:"500px",marginTop: '339px',marginLeft: '10px', fontFamily: 'sans-serif'}}>Contact No</label>
          <input
            type='text'
            value={contactNumber}
            onChange={(e) => setContactNo(e.target.value)} style={{color: "black",top: '0',width:"500px", marginTop: '25px',marginLeft: '70px', fontFamily: 'sans-serif'}}
            // className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label class = "attribute" style={{top: '0', left:"500px",marginTop: '402px',marginLeft: '10px', fontFamily: 'sans-serif'}}>Stakeholder Role</label>
          <input
            type='text'
            value={stakeholderRole}
            onChange={(e) => setStakeholderRole(e.target.value)} style={{color: "black",top: '0',width:"500px", marginTop: '22px',marginLeft: '70px', fontFamily: 'sans-serif'}}
            // className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        <div className='my-4'>
          <label class = "attribute" style={{top: '0', left:"500px",marginTop: '465px',marginLeft: '10px', fontFamily: 'sans-serif'}}>Email *</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)} style={{color: "black",top: '0',width:"500px", marginTop: '25px',marginLeft: '70px', fontFamily: 'sans-serif'}}
            // className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        <div className='my-4'>
          <label class = "attribute" style={{top: '0', left:"500px",marginTop: '528px',marginLeft: '10px', fontFamily: 'sans-serif'}}>Password *</label>
          <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)} style={{color: "black",top: '0',width:"500px", marginTop: '22px',marginLeft: '70px', fontFamily: 'sans-serif'}}
            // className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        {/* </div> */}
        {/* <button id = "save" onClick={handleEditVoter}> */}
        <button class = "save" onClick={async () => {
      // try {
      //   setErrorOccurred(false);
        //await handleExists();

        /* if (!errorOccurred) {
          setErrorOccurred(true);
          setTimeout(async () => { */
             handleEditVoter();
            
         /*  }, 500); // Adjust the delay time in milliseconds as needed
          
        }
        else{
          enqueueSnackbar('User exists', { variant: 'error' }); 
          setErrorOccurred(false);
        }
      } catch (error) {
        console.error('Error occurred:', error);
      } */
    // }
  }}>
          Save
        </button>
      </div>
    </div>
    </div>
    <Link to ="/login">
        <button class = "save"  style={{ position:"absolute", left:"500px"}}>
          Back to login
        </button>
      </Link>
    </div>
  )
}

export default EditVoters
