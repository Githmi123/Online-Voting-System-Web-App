import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import VotersTable from "../components/home/VotersTable";
import VotersCard from "../components/home/VotersCard";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const Home = () => {
  const [voters, setVoters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/voters/")
      .then((response) => {
        setVoters(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])

  const handleSearch = () => {
    // Perform the search operation based on the searchQuery
    if (searchQuery) {
      setLoading(true);
      axios
        .get(`http://localhost:5555/voters/search/${searchQuery}`)
        .then((response) => {
          if (response.data) {
            const id = response.data._id; // Assuming the ID is accessible in the response data
            enqueueSnackbar(`Search successful`, { variant: 'success' });
            navigate(`/voters/details2/${id}`); // Redirect to the user details page
          } else {
            enqueueSnackbar(`No results found`, { variant: 'error' });
          }
        })
        .catch((error) => {
          setLoading(false);
          enqueueSnackbar('Error searching', { variant: 'error' });
          navigate(`/voters`);
          console.error('Error searching:', error);
          navigate(`/voters`);
        });
    } else {
      enqueueSnackbar('Please enter a search query', { variant: 'warning' });
    }
  }; 
  return (
    <div className="p-4" style={{backgroundColor:"rgba(24, 23, 95, 0.78)"}}>
       <div>
        <label style={{left:"700px", color:"white", fontWeight:"bold", position:"absolute", top:"79px"}}>Search by NIC</label>
        <input
          type="text"
          placeholder='Enter NIC'
          className='form-control rounded-0'
          style={{left:"820px", width:"300px", color: 'black', position:"absolute", top:"79px"}}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div> 

{/* */}
      <Link>
        <button id="search" onClick={handleSearch} style={{left:"1200px", border:"5px", color:"white", backgroundColor:"#005CB9" }} >
          Search
        </button>
      </Link>
{/*       <div className="flex justify-between items-center gap-x-4">
        <button 
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div> */}
      <div /* className="flex justify-between items-center" */>
        <h1 style={{top:"30px", position:"absolute",fontSize:"50px"}}>Voters List</h1>
        <Link to="/voters/create2">
          <button id = "add">Add a Voter</button>
          {/* <MdOutlineAddBox className="text-sky-800 text-4xl" /> */}
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <VotersTable voters={voters} />
      ) : (
        <VotersCard voters={voters} />
      )}
      <Link to = '/'>
      <Button style={{left:"1400px", position:"absolute", marginRight:"0px",top:"8px",fontSize: "9px", height:"32px", border:"5px", color:"white", backgroundColor:"red" }}>Log Out</Button>
      </Link>
      
    </div>
  );
};

export default Home;
