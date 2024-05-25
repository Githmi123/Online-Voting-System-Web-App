import React, { useState } from 'react';
import "./AboutPage.css";
import img1 from '../components/background.png';
import img2 from '../components/box2.png';
import img3 from '../components/man2.png';

import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const AboutPage = () => {
    
    return ( 
        <header>
            <div id='box' style={{backgroundColor:"#CBCBE1", left:"0px", width:"1540px", top:"0px", height:"722px"}}>
                <img src={img2} style={{marginTop:"130px", height:"540px", width:"1900px"}}/>

            </div>
            <div id="main">
                About Us
            </div>

            <div id='text'>
            Victory Holdings PLC is a leading conglomerate company and also the Sri Lanka’s premier diversified company, which is also listed in the Colombo Stock Exchange. As a company with globally distributed stakeholders, this Online Voting System facilitates a reliable, efficient and secure platform for voting without being required to attend every Board Meeting. No any personalized ID is required and your confidentiality in voting is highly secured.
            </div>
            <img src={img1} id = 'img' style={{left:"950px", top:"140px"}}/>
            <Link to="/">
                            <Button class = "back" style={{background:"#D5623D", left:"800px"}}>
                            Back
                            </Button>
            </Link>

            <button id = "visit">
                Visit our website
            </button>
        </header>
        
     );
}


export default AboutPage;