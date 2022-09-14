import React, { useState } from "react";


function EditUser( {user, setUser, errors, setErrors} ) {
    const [formData, setFormData] = useState( {user} )

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
        console.log(updatedUserJson)
        setUser(updatedUserJson)
        if(updatedUserJson.errors) setErrors(Object.entries(updatedUserJson.errors))
      })
      console.log(errors)
      setFormData('');
  }

  return (
    <div className="container is-fluid">
      <div className="notification is-primary">
        <h1>Update Profile</h1>
        <form onSubmit={handleUpdateUser} >
        <label>
          Email
          <input type="text" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </label>
          <label>
          Username
          <input type="text" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
          </label>
          <label>
          Password
          <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </label>
          <input type="submit" value="Edit User" />
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