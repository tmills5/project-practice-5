import React from 'react';
import { Link } from 'react-router-dom';


function Navigation({user, setUser}) {

    const logout = () => {
        fetch('/logout', {
          method: 'DELETE'
        })
          .then(()=>{
            setUser()
          }
          );
      }


      
    return(
        <>
        {user ? 
        <>
        <Link to='/users/:id'>{user.username}</Link>

        </>
        :
        ''
        }
        

        {/* <p>{user ? user.username : ''}</p> */}

        <h5>Navigation</h5>
        <Link to='/'>Home</Link>
        <br/>
        <div onClick={logout}><Link to='/logout'>Log Out</Link></div>
        <br/>
        <Link to='/login'>Log In</Link>
        <br/>
        <br/>
        <Link to='/signup'>Signup</Link>
        <br/>
        </>
    );
};

export default Navigation;