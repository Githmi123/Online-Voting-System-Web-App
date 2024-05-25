import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import "./CreateVoters1.css";
import img1 from '../components/Register.png';
import { Link } from 'react-router-dom';

const CreateVoters2 = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dOB, setDOB] = useState('');
  const [nIC, setNIC] = useState('');
  const [contactNumber, setContactNo] = useState('');
  const [stakeholderRole, setStakeholderRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [voters, setVoters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const [errorOccurred, setErrorOccurred] = useState(false);

//   const handleSaveVoter = async () => {
//     const data = {
//       firstName,
//       lastName,
//       dOB,
//       nIC,
//       contactNumber,
//       stakeholderRole,
//     email,
//     password
//     };
// try{
//     setLoading(true);
//     axios
//       .post(`http://localhost:5555/voters/create1`, data)
//       .then((response) => {
//         const id = response.data.id;
//         setLoading(false);
//         // if (response.status === 400) {
//         //   setErrorOccurred(true);
//         // }
//         // else if(response.status === 201){
//         //   setErrorOccurred(false);
//         // }
//         enqueueSnackbar('Voter created successfully', {variant: 'success'});
//         //navigate(`/emailandpassword/${id}`);
//         // `/voters/edit/${id}`
//       })}
//       catch(error) => {
//         setErrorOccurred(true);
//         setLoading(false);
//         //alert('Please enter the required details');
//         enqueueSnackbar('Error', { variant: 'error' });
//         console.log(error);
//       }
//   };

const handleSaveVoter = async () => {
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

  try {
    setLoading(true);
    const response = await axios.post(`http://localhost:5555/voters/create1`, data);
    const id = response.data.id;
    setLoading(false);
    enqueueSnackbar('Voter created successfully', { variant: 'success' });
    //setErrorOccurred(false); 
    navigate(`/emailandpassword2/${id}`);

    //navigate(`/emailandpassword/${id}`);
    // `/voters/edit/${id}`
  } catch (error) {
    if (error.response && error.response.status === 400) {
      setErrorOccurred(false); // User exists, set errorOccurred to true
      //navigate(`/emailandpassword/${id}`);
    } else {
      setErrorOccurred(true); 
      enqueueSnackbar('An account exists for the User', { variant: 'error' });
      console.error('Error occurred:', error);
      //navigate(`/emailandpassword/${id}`);/////////////////////////////////////////////////////////
    }
    setLoading(false);
  }
};
  // const handleSearch = () => {
  //   if (!errorOccurred) {
  //   // Perform the search operation based on the searchQuery
  //   if (nIC) {
  //     setLoading(true);
  //     axios
  //       .get(`http://localhost:5555/voters/search/${nIC}`)
  //       .then((response) => {
  //         if (response.data) {
  //           const id = response.data._id; // Assuming the ID is accessible in the response data
            
  //           if(!errorOccurred){
  //             enqueueSnackbar(`Details Saved Successfully`, { variant: 'success' });
  //           navigate(`/emailandpassword/${id}`); // Redirect to the user details page
  //           }
              
      
            
  //         } else {
  //           enqueueSnackbar(`No results found`, { variant: 'error' });
  //         }
  //       })
  //       .catch((error) => {
  //         enqueueSnackbar('Error searching', { variant: 'error' });
  //         console.error('Error searching:', error);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   } else {
  //     enqueueSnackbar('Please enter all the required data', { variant: 'warning' });
  //   }}
  // }; 
  const handleSearch = () => {
    if (!errorOccurred) {
      // Perform the search operation based on the searchQuery
      if (nIC) {
        setLoading(true);
        axios
          .get(`http://localhost:5555/voters/search/${nIC}`)
          .then((response) => {
            if (response.data) {
              const id = response.data._id; // Assuming the ID is accessible in the response data
              navigate(`/emailandpassword2/${id}`);
                //enqueueSnackbar(`Details Saved Successfully`, { variant: 'success' });
                if (!errorOccurred) {
                  navigate(`/emailandpassword2/${id}`); // Redirect to the user details page only if no error occurred
                }
              
            } else {
              enqueueSnackbar(`No results found`, { variant: 'error' });
              navigate(`/emailandpassword2/${id}`);
            }
            navigate(`/emailandpassword2/${id}`);
          })
          .catch((error) => {
            enqueueSnackbar('Error searching', { variant: 'error' });
            console.error('Error searching:', error);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        enqueueSnackbar('Please enter all the required data', { variant: 'warning' });
      }
    }
  };

 
  // const handleExists = () => {
  //   if (!errorOccurred) {
  //   // Perform the search operation based on the searchQuery
  //   if (nIC) {
  //     setLoading(true);
  //     axios
  //       .get(`http://localhost:5555/voters/search/${nIC}`)
  //       .then((response) => {
  //         if (response.data) {
  //           const id = response.data._id; // Assuming the ID is accessible in the response data
  //           setErrorOccurred(true);
           
  //           //   enqueueSnackbar(`Details Saved Successfully`, { variant: 'success' });
  //           // navigate(`/emailandpassword/${id}`); // Redirect to the user details page
      
            
  //         } else {
  //           setErrorOccurred(false);
  //           // enqueueSnackbar(`No results found`, { variant: 'error' });
  //         }
  //       })
  //       .catch((error) => {
  //         // enqueueSnackbar('Error searching', { variant: 'error' });
  //         console.error('Error searching:', error);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   } else {
  //     enqueueSnackbar('Please enter all the required data', { variant: 'warning' });
  //   }}
  // }; 


  const handleExists = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5555/voters/search/${nIC}`);
      if (response.data) {
        //const id = response.data._id;
        setErrorOccurred(true);
      } 
      else {
        setErrorOccurred(false);
      }
      setLoading(false);
    } catch (error) {
      setErrorOccurred(false);
      console.error('Error searching:', error);
      setLoading(false);
    }
  };



  return (
    <div  id = "row" >
      <div /* id ="column" */ style={{backgroundColor: '#8080A1', width: "600px", height:"722px",marginBottom:"0px", margin:"0px" }}>
                    <img src={img1} style={{ width: '750px', height: '500px', marginTop: '60px', marginBottom:"0px", paddingBottom:"0px" }}/>
                    
      </div>
      <div /* id = "column2" */ style={{ textAlign: 'left'}}>
        <p id = "heading" style={{top: '0', width:"1000px", fontSize:"32px", marginTop: '20px',left:"630px",marginLeft: '0px'}}>Hello there, you have few steps ahead to vote...</p>
        <p id = "heading2" style={{top: '5px', marginTop: '55px',marginLeft: '0px' ,left:"630px"}}>Register to cast your vote</p>

    <div className='p-4'>
      {/* <BackButton/> */}
      <Link to = "/login">
      <button id = "button" style={{background: "#D5623D", top:"590px", height:"43px", left:"750px"}}>
        Back to Login
      </button>
      </Link>
      
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
            // value={searchQuery}
        //   onChange={(e) => setNIC(e.target.value)}
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

        {/* <div className='my-4'>
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
        </div> */}
        <button /* className='p-2 bg-sky-300 m-8' */ id="next" 
    //     onClick={async () => {
   

    //     try {
    //       setErrorOccurred(true);
    //       await handleExists();
    //       if (!errorOccurred) {
    //           setTimeout(() => {
    //                handleSaveVoter();
    //               if (!errorOccurred) {
    //                 setTimeout(() => {
    //                     handleSearch();
                        
    //                 }, 500); // Adjust the delay time in milliseconds as needed
    //             }
    //           }, 500); // Adjust the delay time in milliseconds as needed
    //       }
    //       else{
    //         enqueueSnackbar('User exists', { variant: 'error' });
    //       }
    //   } catch (error) {
    //       console.error('Error occurred:', error);
    //   }    
    // }}

    onClick={async () => {
      try {
        setErrorOccurred(false);
        await handleExists();
        if (!errorOccurred) {
          //setErrorOccurred(true);
          setTimeout(async () => {
            await handleSaveVoter();
            // if (errorOccurred) {
            //   setTimeout(() => {
            //     handleSearch();
            //   }, 500); // Adjust the delay time in milliseconds as needed
            // } else {
            //   //enqueueSnackbar('User exists', { variant: 'error' });
            // }
          }, 500); // Adjust the delay time in milliseconds as needed
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }}
    
    >
        {/* Save */}
        Save
    </button>
      {/* </div> */}
      {/* <button onClick={handleSearch()}>
        Next
      </button> */}
      
    </div>
    </div>
    </div>
  )
}

export default CreateVoters2
