import React, { useState } from "react";


function EditUser( {user, setUser, navigate, errors, setErrors} ) {
    const [formData, setFormData] = useState('')
// console.log(user)
  const handleUpdateUser = (e) => {
    e.preventDefault()
 
      fetch(`/users/${user.id}`,{
        method:'PATCH',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
            email: formData.email,
            username: formData.username,
            password: formData.password
        }),
      })
      .then(res => res.json())
      .then(updatedUserJson => {
        // console.log(updatedUserJson)
        // onUpdateUser(updatedUserJson)
        setUser(updatedUserJson)
        alert("User Updated!")
        navigate('/users/:id')
        if(updatedUserJson.errors) setErrors(Object.entries(updatedUserJson.errors))
      })
    //   console.log(errors)
      
    }

  return (
    <div className="container is-fluid">
      <div className="notification is-primary">
        <h1>Update Profile</h1>
        <form onSubmit={handleUpdateUser} >
        <label>
          Email
          <input type="text" defaultValue={user.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </label>
          <label>
          Username
          <input type="text" defaultValue={user.username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
          </label>
          <label>
          Password
          <input type="password" defaultValue={user.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </label>
          <input type="submit" value="Update User" />
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

export default EditUser;