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


              // <>
        // {user ? 
        // <>
        // <Link to='/users/:id'>{user.username}</Link>

        // </>
        // :
        // ''
        // }
        

        // {/* <p>{user ? user.username : ''}</p> */}

        // <h5>Navigation</h5>
        // <Link to='/'>Home</Link>
        // <br/>
        // <div onClick={logout}><Link to='/logout'>Log Out</Link></div>
        // <br/>
        // <Link to='/login'>Log In</Link>
        // <br/>
        // <br/>
        // <Link to='/signup'>Signup</Link>
        // <br/>
        // </>
    return (

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  <a class="navbar-item" href="/">
      <div>🍺MSBH || </div>
    </a>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href='/breweries'>
        Breweries
      </a>

      <a class="navbar-item">
        Explore
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <a class="navbar-item">
            User Profile
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item" href='/logout' onClick={logout}>
            Log out
          </a>
        </div>
      </div>
    </div>
      <div>
        MissBrewHouse
        <br/>
        <p>{user ? user.username : ''}</p>
      </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href='/signup'>
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" href="/login">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
  </nav>
    );
};

export default Navigation;