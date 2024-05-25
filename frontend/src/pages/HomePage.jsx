import React from 'react';
import "./HomePage.css";
//import Header from "../components/Header";
import RegisterButton from "../components/RegisterButton";
// import { useNavigate } from 'react-router-dom';
import img1 from '../components/VictoryHoldings Logo.png';
import img2 from '../components/int1.png';
import img3 from '../components/Text.png';
import { AlignHorizontalCenter } from '@mui/icons-material';
import { alignProperty } from '@mui/material/styles/cssUtils';
//import setBodyColor from '../components/setBodyColor'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

   
    
       

    
    

const HomePage = () => {
    // const navigate = useNavigate();
    return ( 
        <header>
                <Link to="/login">
                     <Button class = "login" /* style={{top: "20px", left: "1350px", width: "90px",
                      fontSize: "19px", height:"40px", border:"5px"}} */>
                    Login
                    </Button>
                </Link>
                 <Link to="/about">
                    <Button class = "about" /* style={{top: "20px", left: "1260px", width: "90px",
                      fontSize: "19px", height:"40px", border:"5px"}} */>
                    About
                    </Button>
                </Link> 
                
                    <Button class = "contact">
                    Contact
                    </Button>
               
                
                <div >
                {/* <Header/> */}
                <img src={img1} style={{ width: '300px', height: '100px' }}/>

                </div>
            
            
            <div >
                <div >
                    <img src={img2} style={{ width: '600px', height: '600px' }}/>
                </div>
                <div >
                    <img src={img3} style={{ width: '930px', left: "550px",height: '360px', top:"200px", position: "absolute"}}/>
                    
                    
                </div>

            </div>
            <Link to="/voters/create1">
                        
                        <Button id = "registerButton">
                        <span >REGISTER TO VOTE</span>
                        </Button>
            </Link> 
            
                
            
            
           

        </header>
        
     );
}

//const navigate = useNavigate();

export default HomePage;