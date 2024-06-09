import React, { useState, useEffect } from 'react';
import "./VotingPage.css";
import img1 from '../components/VictoryHoldings Logo.png';
import img2 from '../components/man1.png';
import img3 from '../components/man2.png';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';


const VotingPage = () => {
    const initialCandidate1Votes = localStorage.getItem('candidate1Votes') || 0;
    const initialCandidate2Votes = localStorage.getItem('candidate2Votes') || 0;

    const [candidate1Votes, setCandidate1Votes] = useState(parseInt(initialCandidate1Votes));
    const [candidate2Votes, setCandidate2Votes] = useState(parseInt(initialCandidate2Votes));
    
    
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const { id } = useParams(); 
    var hasVoted;

    // useEffect(() => {
    //     axios.get('http://localhost:5555/voteCounts') // Replace with your actual API endpoint
    //         .then((response) => {
    //             setCandidate1Votes(response.data.candidate1 || 0); // Set candidate 1 votes, defaulting to 0 if the value is undefined
    //             setCandidate2Votes(response.data.candidate2 || 0); // Set candidate 2 votes, defaulting to 0 if the value is undefined
    //         })
    //         .catch((error) => {
    //             console.error('Error occurred while fetching vote counts:', error);
    //         });
    // }, []);
    useEffect(() => {
        localStorage.setItem('candidate1Votes', candidate1Votes);
        localStorage.setItem('candidate2Votes', candidate2Votes);
    }, [candidate1Votes, candidate2Votes]);
    
    const handleVoting = (candidate) => {
        const data = {
            candidate
        };
    
        // setLoading(true);
        axios
        .post(`http://localhost:3500/voters/submit-vote/${id}`, data)
        .then((response) => {
            // Handle the response accordingly
            if (response.data.isVoted) {
               
                // Handle the case where the user has already voted
                enqueueSnackbar(`You have already voted!`, { variant: 'error' });
            } else {
                // Handle the case where the vote is successful
                enqueueSnackbar(`Voting successful`, { variant: 'success' });
    
                // If the voting is successful, update the local state
                if (candidate === "candidate1") {
                    setCandidate1Votes(prevVotes => prevVotes + 1);
                } else if (candidate === "candidate2") {
                    setCandidate2Votes(prevVotes => prevVotes + 1);
                }
                useNavigate(`/thankyou`);
            }
        })
        .catch((error) => {
           // enqueueSnackbar('Error occurred while processing the vote', { variant: 'error' });
            console.error('Error occurred while processing the vote:', error);
        });
    };
    
    
    return ( 
        <header>
            
            <div id = "page" style={{backgroundColor:"#1A2023"}}>
            
                <div id='whiteboxcontent'>
                    <div class = 'whiteboxtext'>
                    This election is being conducted by Victory Holdings PLC
                    </div>
                    <div class = 'whiteboxtext' style={{textDecorationLine: 'underline', top: '20px'}}>
                    Steps
                    </div>
                    <div class = 'whiteboxtext' style={{top: '40px', fontSize:'17px', fontWeight: "normal"}}>
                    Carefully read all the qualifications of each candidate.
                    </div>
                    <div class = 'whiteboxtext' style={{top: '60px', fontSize:'17px', fontWeight: "normal"}}>
                    Click “Vote” button for yor desired candidate.
                    </div>
                    <div class = 'whiteboxtext' style={{top: '80px', fontSize:'17px', fontWeight: "normal"}}>
                    You are able to vote only for one candidate.
                    </div>
                    <div class = 'whiteboxtext' style={{top: '100px', fontSize:'17px', fontWeight: "normal"}}>
                    Please ensure that your vote is fair and transparent.
                    </div>
                    <div class = 'whiteboxtext' style={{top: '120px', fontSize:'17px', fontWeight: "normal"}}>
                    The confidentiality of your vote is ensured.
                    </div>

                    





                </div>

                <img src={img1} id = "image"/>
                <div id = "bluebox">
                    <div class = 'box'>
                        
                    </div>
                    <div class = 'box' style={{top: '270px'}}>
                        
                    </div>
                    <div class='text1'>
                        Candidate 01: 
                    </div>
                    <div class='text1' style={{top: '90px', left:'70px'}}>
                    Mr. George de Silva
                    

                    </div>
                    <div class='text1' style={{top: '140px', left:'70px'}}>
                   
                    Votes: {candidate1Votes}

                    </div>
                
                    <Link>
                        <Button class = "button1" >
                        See Qualifications
                        </Button>
                    </Link>
                   
                        <Button class = "vote" style={{background:"#DB2323"}} onClick={() => handleVoting("candidate1")}>
                        Vote
                        </Button>
               
                    <img src={img2} id = "image2"/>




                    <div class='text1' style={{top: '300px'}}>
                        Candidate 02: 
                    </div>
                    <div class='text1' style={{top: '350px', left:'70px'}}>
                    Mr. David Batuwanthudawa


                    </div>
                    <div class='text1' style={{top: '400px', left:'70px'}}>
                    Votes: {candidate2Votes}


                    </div>
                   
                    <Link>
                        <Button class = "button1" style={{top: '300px'}}>
                        See Qualifications
                        </Button>
                    </Link>
                    
                        <Button class = "vote" style={{top: '395px', background:"#DB2323"}} onClick={() => handleVoting("candidate2")}>
                        Vote
                        </Button>
                  
                    <img src={img3} id = "image2" style={{top: '295px'}}/>
                </div>
                <Link to="/">
                        <Button class = "exit" style={{background:"white", borderRadius:"30px", bottom:"20px", position:"absolute"}}>
                        Exit
                        </Button>
                </Link>
                
                
      
              

            </div>
            
            
            
          

        </header>
        
     );
};


export default VotingPage;