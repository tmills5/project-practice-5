import React from 'react';



function Home({user}) {
console.log(user)
    return(
        <>

        <h1>Home</h1>
        
        <br/>
        <p>Welcome..{user ? user.username : ''}</p>
        </>
    );
};

export default Home;