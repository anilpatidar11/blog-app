import axios from 'axios';
import React, { useState } from 'react'
import "../register.css"
import { useNavigate } from 'react-router-dom';
const Register = () => {

  const [formData, setFormdata] = useState({
    firstName: "",
    lastName:"" ,
    username: "",
    email: "",
    phone: "",
password:""
})

  const navigate = useNavigate()
  
  const handleChange = (e) => {
const name = e.target.name;
  const value = e.target.value;
     setFormdata({...formData, [name] : value})

  }
  
  const handleClear = () => {
    
    setFormdata({ firstName: "",
    lastName:"" ,
    username: "",
    email: "",
    phone: "",
      password: ""
    })


  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/register', formData)
      
      if (res.data.status) {
  handleClear()
        alert("Data Succesfully saved")
        navigate('/login');
}


    }
   catch (error) {
  alert("Something went wrong. Please try again.");
}

}
  
console.log(formData)

  return (

    <div className='register-div'>
      <form onSubmit={handleSubmit}  className='form-div'>

<input type='text' name='firstName' onChange={handleChange} placeholder='Enter first name' value={formData.firstName}/>

<input type='text' name='lastName' onChange={handleChange} placeholder='Enter last name' value={formData.lastName}/>

  <input type='text' name='username' onChange={handleChange} placeholder='Enter username ' value={formData.username} />
  
   <input type='email' name='email' onChange={handleChange} placeholder='Enter your email' value={formData.email}/>

<input type='number' name='phone' onChange={handleChange} placeholder='Enter mobile no.' value={formData.phone}/>

        <input type='password' name='password' onChange={handleChange} placeholder='Enter password' value={formData.password} />
        

        <button type='submit' > Submit</button>
      </form>
    
    
    
    
    </div>
  )
}

export default Register