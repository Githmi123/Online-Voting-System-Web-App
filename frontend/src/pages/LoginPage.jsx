import React, { useState } from 'react';
import "./LoginPage.css";
import img1 from '../components/vote.png';
import img2 from '../components/man1.png';
import img3 from '../components/man2.png';

import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import BackButton from '../components/BackButton';


// import 'bootstrap/dist/css/bootstrap.min.css';



const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  const handleCheckVoter = () => {
    const data = {
      
      email,
      password
    };

    setLoading(true);
    axios
      .post(`http://localhost:3500/voters/login`, data)
      .then((response) => {
        setLoading(false);
        if (response.data.isAdmin) {
          enqueueSnackbar(`Admin Login successful`, {variant: 'success'});
          navigate(`/voters`); // Redirect to the admin page if the user is an admin
      } else {
        const voterId = response.data.id;
          axios
          .get(`http://localhost:3500/voters/${voterId}`)
          .then((res) => {
            const id = res.data._id; // Assuming the ID is accessible in the response data
            enqueueSnackbar(`Login successful`, {variant: 'success'});
            navigate(`/voters/details/${id}`); // Redirect to the user page if the user is not an admin
          })
          .catch((err) => {
            enqueueSnackbar(`Please Enter Valid Details`, {variant: 'error'});
            console.error('Error retrieving user ID:', err);
          });
          //navigate(`/voters/details/${response.data._id}`); // Redirect to the user page if the user is not an admin
      }
       /*  enqueueSnackbar('Voter created successfully', {variant: 'success'});
        navigate('/'); */
      })
      .catch((error) => {
        setLoading(false);
        //alert('Please Enter a correct Email Address and Correct Password!');
        enqueueSnackbar('Please Enter a correct Email Address and Correct Password!', { variant: 'error' });
        console.log(error);
      });
  };

    /* const handleRegister = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5555/voters/verify/', {email, password})
        .then(result => {console.log(result)
            if(result.data === "Success"){
                navigate('/')
            }
        })
        .catch(err => console.log(err))
    }; 

    const handleSaveLogin = () => {
        const data = {
          email,
          password
        };
    
        setLoading(true);
        axios
          .post(`http://localhost:5555/voters/register`, data)
          .then(() => {
            setLoading(false);
            enqueueSnackbar('Account created successfully', {variant: 'success'});
            navigate('/register');
          })
          .catch((error) => {
            setLoading(false);
            alert('An error happened. Please Check console');
            enqueueSnackbar('Error', { variant: 'error' });
            console.log(error);
          });
      }; */

    
    return ( 
        <header>
        
            
            
            
            <img id = "img" src={img1} style={{top:"0px", left:"0px", width: "739px", height: "754px"}}/>
            <div id='grey'>

            </div>

            <div id = 'login'>
                Login
            </div>

            <div class='name'>
            <label>Email Address</label>
            <input type="email" placeholder='Enter email' className='form-control rounded-0' style={{color: 'black', width: "600px"}} 
            onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            {/* <div class='textbox'>

            </div> */}
            <div class='name'style={{top:'450px'}}>
            <label>Password</label>
            <input type="password" placeholder='Enter password' className='form-control rounded-0' style={{color: 'black', width: "600px"}} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            {/* <div class='textbox' style={{top:'365px'}}>
                
            </div> */}
            <Link >
                <Button id = "login1" onClick={handleCheckVoter}>
                Login
                </Button>
            </Link>
             {/* <div class = 'blue' style={{top:'615px'}}>
            Forgot Password?
            </div>  */}

            <div class='white' style={{top:"615px"}}>
            No account?
            </div>
            <Link>

            <Link to = "/voters/create1">
            <div class = 'blue' style={{top:"615px", left: '910px'}}>
            Register now
            </div>
            </Link>
            
            </Link>
            <Link to = "/">
            <div class = 'blue' style={{top:"685px", left: '1400px'}}>
            Back
            </div>
            </Link>
            
          

        </header>
        
     );
}


export default LoginPage;