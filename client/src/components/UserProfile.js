import react from 'react';

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
        <h1>{user.username}</h1>
        <button onClick={deleteUserAcct}>delete acct</button>
        </>
    )
};

export default UserProfile;