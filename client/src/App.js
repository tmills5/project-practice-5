import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
// import UserDetailsProvider from './context/UserDetailsProvider';


import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/SignUp";
import EditUser from "./components/EditUser";
import UserProfile from './components/UserProfile';
import Navigation from "./components/Navigation";

function App() {
  const [user, setUser] = useState('');
  const [errors, setErrors] = useState([]);
  const [randomRecipes, setRandomRecipes] = useState([])
  const [categories, setCategories] = useState([])
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

    
    fetch('/random_recipes')
      .then(response => response.json())
      .then(response => setRandomRecipes(response.meals))
      .catch(err => console.error(err));

    fetch('/categories')
      .then(response => response.json())
      .then(response => setCategories(response.categories))
      .catch(err => console.error(err));
  },[]);

// console.log(user)


  return (
    <div className="App">
      <Navigation user={user} setUser={setUser}/>
      <hr/>
      <Routes>
        <Route exact path='/login' element={ <Login user={user} setUser={setUser}/> } />
        <Route exact path='/logout' element={ <Logout /> } />
        <Route exact path='/' element={ <Home user={user} randomRecipes={randomRecipes} categories={categories}/> } />
        
        <Route exact path='/signup' element={ <Signup setUser={setUser}/> } />
        <Route exact path='/users/:id/edit' element={ <EditUser user={user} setUser={setUser} navigate={navigate} errors={errors} setErrors={setErrors}/> } />
        <Route exact path='/users/:id' element={ <UserProfile user={user} setUser={setUser} errors={errors} setErrors={setErrors} navigate={navigate}/> } />
   
      </Routes>
    </div>
  );
}

export default App;
