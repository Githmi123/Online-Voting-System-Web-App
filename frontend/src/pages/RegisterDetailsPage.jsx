import React, { useState } from 'react';
import "./RegisterDetailsPage.css";
import Header from "../components/Header";
import { AlignHorizontalCenter, AlignVerticalTop } from '@mui/icons-material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import img1 from '../components/Register.png';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";



import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

// import RegisterButton from "../components/RegisterButton";
/* 

import img2 from '../components/int1.png';
import img3 from '../components/Text.png'; */

//import setBodyColor from '../components/setBodyColor'

   
    
       

    
    

const RegisterDetailsPage = () => {
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [dob, setDob] = useState("");
    const [nic, setNIC] = useState("");
    const [con, setCon] = useState("");
    const [role, setRole] = useState("");
    return ( 
        <header>
            
                {/* <div id="he">
                 <Header/>
                <img src={img1} style={{ width: '300px', height: '100px' }}/>

                </div> */}
            
            
            <div id = "row">
                <div id ="column" style={{backgroundColor: '#8080A1'}}>
                    <img src={img1} style={{ width: '600px', height: '500px', marginTop: '100px' }}/>
                    
                </div>
                <div id = "column2" style={{ textAlign: 'left'}}>
                    {/* <img src={img3} style={{ width: '930px', height: '550px'}}/> */}
                    
                        <p id = "heading" style={{top: '0', marginTop: '40px',marginLeft: '0px'}}>Hello there, you have few steps ahead to vote...</p>
                        <p id = "heading2" style={{top: '0', marginTop: '55px',marginLeft: '0px'}}>Register to cast your vote</p>

                        <p class = "attribute" style={{top: '0', marginTop: '90px',marginLeft: '0px', fontFamily: 'sans-serif'}}>First Name</p>
                        <input class="textbox" type='text' value={fname} onChange={(e) => setFName(e.target.value)}/>

                        <p class = "attribute" style={{top: '0', marginTop: '150px',marginLeft: '0px', fontFamily: 'sans-serif'}}>Last Name</p>
                        <input class="textbox" type='text' style={{top: '63px'}} value={lname} onChange={(e) => setLName(e.target.value)}/>

                        <p class = "attribute" style={{top: '0', marginTop: '213px',marginLeft: '0px', fontFamily: 'sans-serif'}}>Date of Birth</p>
                        <input class="textbox" type='text' style={{top: '126px'}} value={dob} onChange={(e) => setDob(e.target.value)}/>

                        <p class = "attribute" style={{top: '0', marginTop: '276px',marginLeft: '0px', fontFamily: 'sans-serif'}}>National ID No</p>
                        <input class="textbox" type='text' style={{top: '189px'}} value={nic} onChange={(e) => setNIC(e.target.value)}/>

                        <p class = "attribute" style={{top: '0', marginTop: '339px',marginLeft: '0px', fontFamily: 'sans-serif'}}>Contact No</p>
                        <input class="textbox" type='text' style={{top: '252px'}} value={con} onChange={(e) => setCon(e.target.value)}/>

                        <p class = "attribute" style={{top: '0', marginTop: '402px',marginLeft: '0px', fontFamily: 'sans-serif'}}>Stakeholder Role</p>
                        <input class="textbox" type='text' style={{top: '315px'}} value={role} onChange={(e) => setRole(e.target.value)}/>
                </div>    
                        <div id = "row">
                            <div id = "column" className = "buttoncontainer">
                                <Link to="/"  className="button-link" style={{ marginTop: '100px', marginRight:'0'}}>
                                {/* <button>Posts</button> */}
                                    <BackButton id = "back"></BackButton>
                                </Link>
                            </div>
                            <div id = "column" className = "buttoncontainer">
                                <Link to="/EmailRegistrationPage"  className="button-link" style={{ marginTop: '600px', marginLeft:'0px' }}>
                                {/* <button>Posts</button> */}
                                    <NextButton id = "next"></NextButton>
                                        
                                </Link>
                            </div>

                        </div>
                        


                        

                

            </div>
            
                
            
            
            {/* <div id = "root"> 
                hiiiii

                </div>
             */}

        </header>
        
     );
}
 
export default RegisterDetailsPage;