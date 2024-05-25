import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateVoters1 from './pages/CreateVoters1';
import CreateVoters2 from './pages/CreateVoters2';
import DeleteVoters from './pages/DeleteVoters';

import EditVoters from './pages/EditVoters';
import EditVoters2 from './pages/EditVoters2';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import VotingPage from './pages/VotingPage';
import RegisterDetailsPage from './pages/RegisterDetailsPage';
import EmailPasswordForm from './pages/EmailPasswordForm';
import EmailPasswordForm2 from './pages/EmailPasswordForm2';
import ShowVoters from './pages/ShowVoters';
import ShowVoters2 from './pages/ShowVoters2';
import ThankYou from './pages/ThankYou';
import RegistrationSuccessfulPage from './pages/RegistrationSuccessfulPage';
// import EmailPasswordForm from './pages/EmailPasswordForm';


const App = () => {
  return (
    <Routes>
      {/* Each Route component defines a specific path and the component to render when that path is matched. The path attribute defines the URL path, and the element attribute specifies the component to render for that path. */}
      <Route path='/' element ={<HomePage/>}/>
      <Route path='/voters' element ={<Home/>}/>
      <Route path='/about' element ={<AboutPage/>}/>
      <Route path='/emailandpassword/:id' element ={<EmailPasswordForm/>}/>
      <Route path='/emailandpassword2/:id' element ={<EmailPasswordForm2/>}/>
      <Route path='/registrationsuccessful/:id' element ={<RegistrationSuccessfulPage/>}/>
      <Route path='/register' element ={<RegisterDetailsPage/>}/>
      <Route path='/login' element ={<LoginPage/>}/>
      <Route path='/voters/create1' element ={<CreateVoters1/>}/>
      <Route path='/voters/create2' element ={<CreateVoters2/>}/>
      <Route path='/voters/details/:id' element ={<ShowVoters/>}/>
      <Route path='/voters/details2/:id' element ={<ShowVoters2/>}/>
      <Route path='/voters/edit/:id' element ={<EditVoters/>}/>
      <Route path='/voters/edit2/:id' element ={<EditVoters2/>}/>
      
      <Route path='/voters/delete/:id' element ={<DeleteVoters/>}/>
      
      <Route exact path="voters/VotingPage/:id" element={<VotingPage/>}></Route>
      <Route exact path="/thankyou" element={<ThankYou/>}></Route>

    </Routes>
  )
}

export default App
