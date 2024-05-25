import React, { useState } from 'react';
import "./ThankYou.css";
import img1 from '../components/tick.png';
import img2 from '../components/man1.png';
import img3 from '../components/man2.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const ThankYou = () => {
    
    return ( 
        <header>
            <img id = "tick" src={img1}/>
            <div id='text1'>
            Thank You for Voting!
            </div>

            <div class='text2'>
            Your votes were successfully submitted. Results will be published in the main 
            </div>
            <div class='text2' style={{top: '620px'}}>
            website later. 
            </div>
            <Link to="/AccountPage">
                <Button id = "back" >
                Back
                </Button>
            </Link>
            

        </header>
        
     );
}


export default ThankYou;