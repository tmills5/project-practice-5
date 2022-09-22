import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';


import LandingPage from "./components/LandingPage";
import Breweries from "./components/Breweries";
import BreweryDetail from "./components/BreweryDetail";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/SignUp";
import EditUser from "./components/EditUser";
import UserProfile from './components/UserProfile';
import Navigation from "./components/Navigation";

function App() {
  const [user, setUser] = useState('');
  const [errors, setErrors] = useState([]);
  // const [breweries, setBreweries] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    // authenticating user on page load
    fetch('/authenticated_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setUser(user);
        });
      }
    })
  },[]);

// console.log(breweries)


  return (
    <div className="App">

      <Navigation user={user} setUser={setUser}/>

      <Routes>
        <Route exact path='/login' element={ <Login user={user} setUser={setUser} navigate={navigate}/> } />
        <Route exact path='/logout' element={ <Logout /> } />
        <Route exact path='/' element={ <LandingPage user={user} /> } />
        <Route exact path='/breweries' element={ <Breweries />} />
        <Route exact path='/breweries/:id' element={ <BreweryDetail />} />
        <Route exact path='/signup' element={ <Signup setUser={setUser}/> } />
        <Route exact path='/users/:id/edit' element={ <EditUser user={user} setUser={setUser} navigate={navigate} errors={errors} setErrors={setErrors}/> } />
        <Route exact path='/users/:id' element={ <UserProfile user={user} setUser={setUser} errors={errors} setErrors={setErrors} navigate={navigate}/> } />
   
      </Routes>

    </div>
  );
}

export default App;
