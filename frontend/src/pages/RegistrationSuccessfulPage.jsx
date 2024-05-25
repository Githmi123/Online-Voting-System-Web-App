import React, { useState } from 'react';
import "./RegistrationSuccessfulPage.css";
import img1 from '../components/image.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';


const RegistrationSuccessfulPage = () => {
    const navigate = useNavigate();
  const {id} = useParams();

  const handleShowDetails = () => {
    navigate(`/voters/details/${id}`);
  }
    
    return ( 
        <header>
            <div>
                <div id = "greenBox" >
                    <div class = "Heading1" style={{top:"50px"}}>
                        Congratulations!!!!!! 
                       
                    </div>
                    <div class = "Heading1" style={{top:"90px"}}>
                      
                        You have successfully registered
                    </div>
                    <img id = "img" src={img1} style={{left:"157px", top:"150px"}}/>

                    <div id = "text1" style={{top:"500px"}}> 
                    Registration Successful!
                    </div>

                    <div id ="ready">
                    You are ready to Vote ....
                    </div>

                    {/* <Link to="/voters/details/${id}"> */}
                            <Button id = "button" style={{ width: '350px', textAlign: 'center'}} onClick={handleShowDetails}>
                            Go to your Account
                            </Button>
                    {/* </Link> */}

                </div>
            </div>
                
            
            
                
            
          

        </header>
        
     );
}


export default RegistrationSuccessfulPage;