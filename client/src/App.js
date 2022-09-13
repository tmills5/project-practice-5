import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/SignUp";
import Navigation from "./components/Navigation";

function App() {
  const [user, setUser] = useState();
  // const [errors, setErrors] = useState([]);

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
    });
  },[]);

console.log(user)
  return (
    <div className="App">
      <Navigation user={user} setUser={setUser}/>
      <hr/>
      <Routes>

        <Route exact path='/' element={ <Home user={user} /> } />
        <Route exact path='/signup' element={ <Signup setUser={setUser}/> } />
        <Route exact path='/login' element={ <Login user={user} setUser={setUser}/> } />
        <Route exact path='/logout' element={ <Logout /> } />

      </Routes>
    </div>
  );
}

export default App;
