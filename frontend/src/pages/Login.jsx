import axios from "axios";
import React, { useState } from "react";
import "../register.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormdata] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const handleClear = () => {
    setFormdata({
      username: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormdata({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);

      handleClear();

      if (res.data.status) {
        const token = res.data.token;
        const username = res.data.user.username;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);

        alert("Login Successfully");
        console.log(token);
        navigate("/");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  console.log(formData);

  return (
    <div className="register-div">
      <form onSubmit={handleSubmit} className="form-div">
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="Enter username "
          value={formData.username}
        />

        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter password"
          value={formData.password}
        />

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default Login;
