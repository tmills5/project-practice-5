import React from 'react';
import {Link} from 'react-router-dom'

function UserProfile( {user, setUser, navigate} ) {

    const deleteUserAcct = (id) => {
        fetch(`/users/${id}`, {
          method: 'DELETE',
          headers: {'Accept' : 'application/json'}
        })
        .then(()=> {setUser()})
        navigate('/')
      }

    return(
        <>
          <figure class="image is-128x128">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="user avatar"/>
          </figure>
            <h1>{user.username}</h1>
            <button onClick={deleteUserAcct}>delete acct</button>
          <Link to='/users/:id/edit'>update acct</Link>
        </>
    )
};

export default UserProfile;