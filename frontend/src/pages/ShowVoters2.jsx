import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import "./ShowVoters.css";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import img1 from '../components/icon.png';

const ShowVoters2 = () => {
  const [voter, setVoter] = useState({});
  const [loading, setLoading] = useState(false);
  const [postImage, setPostImage] = useState( { myFile : ""})
  const [selectedFile, setSelectedFile] = useState(null);
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/voters/${id}`)
      .then((response) => {
        setVoter(response.data);
        setLoading(false);
      })
      .catch((error) => {   
        console.log(error);
        setLoading(false);
      });
  }, []);
 
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    axios.put(`http://localhost:5555/voters/upload`, formData)
      .then(res => {
        console.log(res.statusText);
      })
      .catch(err => {
        console.error(err);
      });}
//   const handleUpload = () => {
   

//     const data = {
//       myFile: postImage.myFile
//     };
//     setLoading(true);
//     axios
//       .put(`http://localhost:5555/voters/upload/${id}`, data)
//       .then(() => {
//         setLoading(false);
//         enqueueSnackbar('Voter Edited successfully', { variant: 'success' });
//         // navigate(`/voters/details/${id}`);
//       })
//       .catch((error) => {
//         setLoading(false);
//         alert('Please enter details of all the required fields!');
//         enqueueSnackbar('Error', { variant: 'error' });
//         console.log(error);
//       });
//   };



//   const handleSubmit = (e) => {
//     e.preventDefault();
//   handleUpload(); // Call handleUpload when the form is submitted
//   console.log("Uploaded")
//   };

  
//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//   const base64 = await convertToBase64(file);
//   setPostImage({ myFile: base64 }); 
// };

  return (
    
    <div className='p-4'>
      <div id="hello">
            Hello User!!!
      </div>
      <Link to="/">
          <Button id = "Logout" >
          Logout
          </Button>
      </Link>

      {/* <Link to={`/voters/edit/${id}`}>
      <Button style={{left:"1350px", top:"688px",fontSize: "19px", height:"32px", border:"5px", color:"white", backgroundColor:"Green" }}>
        Edit Details
      </Button>
    </Link> */}
      {/* <BackButton /> */}
      {/* <form onSubmit={handleSubmit}>

        <label htmlFor="file-upload"  style={{ top:"700px"}}>
          <img src={postImage.myFile || img1} alt="" style={{width:"300px"}}/>
        </label>

        <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={handleFileUpload}
          
         />

        

         <button type='submit'>Submit</button>
      </form> */}
      {/* <h1 className='text-3xl my-4'>Show Voter</h1> */}
      {/* <div style={{top:"300px"}}>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
    </div> */}

      <div id="Upcoming" style={{top:"480px", left:"20px"}}>
                Upcoming Elections
            </div> 
            <div id="greenBox" style={{top:"529px", height:"170px", borderRadius:"30px", width:"1500px", left:"20px"}}>
                <div id="Chairman">
                Chairman - CEO
                </div> 
                {/* <div id="Text">
                Starts on 25.08.2023  At  8.00 pm - 9.00pm
                </div>  */}
                <div id="Text1" style={{color:"black"}}>
                Open for All Stakeholders
                </div> 

                 <Link to={`/voters/VotingPage/${id}`}> 
                    <Button id = "Vote" style={{left:"1200px"}} >
                    Vote
                    </Button>
               </Link> 
            </div> 
      {loading ? (
        <Spinner />
      ) : (
        <div /* className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4' */>

<div id="box">
                <div id="AccountDetails">
                Account Details
                </div>

                <div class="List" style={{top:"67px"}}>
                ID  :  
                </div>
                <div class="List" style={{top:"67px", left:"250px"}}>{voter._id}</div>

                <div class="List" style={{top:"90px"}}>
                First name  :  
                </div>
                <div class="List" style={{top:"90px", left:"250px"}}>{voter.firstName}</div>


                <div class="List"style={{top:"116px"}}>
                Last name  :  
                </div>
                <div class="List" style={{top:"116px", left:"250px"}}>{voter.lastName}</div>


                <div class="List" style={{top:"143px"}}>
                DOB  :  
                </div>
                <div class="List" style={{top:"143px", left:"250px"}}>{voter.dOB}</div>

                <div class="List" style={{top:"173px"}}>
                NIC  :
                </div>
                <div class="List" style={{top:"173px", left:"250px"}}>{voter.nIC}</div>


                <div class="List" style={{top:"199px"}}>
                Contact No  :  
                </div>
                <div class="List" style={{top:"199px", left:"250px"}}>{voter.contactNumber}</div>

                <div class="List" style={{top:"227px"}}>
                Stakeholder Role  :  
                </div>
                <div class="List" style={{top:"227px", left:"250px"}}>{voter.stakeholderRole}</div>
{/*
                <div class="List" style={{top:"227px"}}>
                 Create Time  :  
                </div>
                <div class="List" style={{top:"257px", left:"250px", width:"200px"}}>{new Date(voter.createdAt).toString()}</div>

                <div class="List" style={{top:"227px"}}>
                Last Update Time  :  
                </div>
                <div class="List" style={{top:"227px", left:"250px"}}>{new Date(voter.updatedAt).toString()}</div>

                 */}

                <Link to={`/voters/edit2/${id}`}>
                    <Button class = "Edit" style={{top:"300px"}} >
                    Edit Details
                    </Button>
                </Link>

                <Link to={`/voters`}>
                    <Button class = "Edit" style={{top:"300px", left:"700px"}} >
                    Back
                    </Button>
                </Link>

                
            
            </div>



          {/* <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{voter._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>First Name</span>
            <span>{voter.firstName}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Name</span>
            <span>{voter.lastName}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>DOB</span>
            <span>{voter.dOB}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>NIC</span>
            <span>{voter.nIC}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Contact No</span>
            <span>{voter.contactNo}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Stakeholder Role</span>
            <span>{voter.stakeholderRole}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(voter.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(voter.updatedAt).toString()}</span>
          </div> */}
        </div>
      )}
    </div>
  )
}

export default ShowVoters2

function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}
