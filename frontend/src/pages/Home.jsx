


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Home.css';

const Home = () => {
  const [username, setUsername] = useState("");
const url = "https://blog-app-ahxa.onrender.com"
 
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get( `${url}/api/secure`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUsername(res.data.user.username);
      } catch (err) {
        console.error("User fetch failed:", err);
        setUsername(""); 
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="home">
      <div className="text-div">
        <p>Welcome to My Blog </p>
        {username && <p> -{username}</p>}
      </div>
    </div>
  );
};

export default Home;
