import React, {useState} from 'react'


function Login( {setUser} ) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const onSubmit = (e) =>{
        e.preventDefault()
        let user = {
            username,
            password
        }

        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(user => {
          setUser(user);

          console.log(user.error)
          // need the values from the object. user.error is an object but i need
          // it in an array
          if(user.error) setErrors(Object.values(user.error))
        })

        // console.log(user.error)
        setUsername('');
        setPassword('');
        setErrors([]);
    }

        
    return (
      // <div className="container is-fluid">
      //   <div className="notification is-primary">
      //   <h1>Log In..</h1>
      //     <form onSubmit={onSubmit}>
      //       <label>
      //         username
      //         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      //       </label>

      //       <label>
      //         Password
      //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      //       </label>
      //       <input type="submit" value="Login" />
      //     </form>

      //     {<p style={{ color: "red" }}>
      //       {errors}
      //     </p>}
  
      //   </div>
      // </div>
      <div className="login-parent">
      <div class="field">
  <p class="control has-icons-left">
    <input class="input" type="email" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope">👤</i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <span class="icon is-small is-left">
      <i class="fas fa-lock">🔑</i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success" onClick={onSubmit}>
      Login
    </button>
  </p>
     {<p style={{ color: "red" }}>
        {errors}
     </p>}
</div>
</div>
    );
}

  export default Login;