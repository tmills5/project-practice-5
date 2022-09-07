import React, { useState } from "react";


function Signup( {setUser} ) {
    const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  

  function onSubmit(e){
    e.preventDefault()
    // navigate('/parks');
      let user = {
        email: email,
        username: username,
        password
      }
     
      fetch(`/users`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(userEnteredJson => {
        console.log(userEnteredJson)
        setUser(userEnteredJson)
        if(userEnteredJson.errors) setErrors(Object.entries(userEnteredJson.errors))
      })
      console.log(errors)
      setEmail('')
      setUsername('');
      setPassword('');
  }

  return (
    <div className="container is-fluid">
      <div className="notification is-primary">
        <h1>Sign Up!!</h1>
        <form onSubmit={onSubmit} >
        <label>
          Email
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
          Username
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <input type="submit" value="Sign up!" />
        </form>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error[1]}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Signup;