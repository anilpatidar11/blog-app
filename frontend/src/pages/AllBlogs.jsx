import axios from "axios";
import React, { useEffect, useState } from "react";
import '../allblogs.css'


const AllBlogs = () => {
  const [data, setData] = useState([]);
const url = "https://blog-app-ahxa.onrender.com"
  const getAllBlog = async () => {
    try {
      const res = await axios.get(`${url}/api/get`,

  {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

        if (res.data.status) {
        setData(res.data.data);
    }
      
      
    
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    }
  };


  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/api/delete/${id}`);
      alert("User Deleted Successfully");
       getAllBlog();
    } catch (err) {
      console.log(err);
    }
  };





  useEffect(() => {
    getAllBlog();
  }, []);

  console.log(data);

  return (
    <div className="main-all">
      
      {data.map((item, index) => (
        <div key={index} className="allblog">
          
          <div className="all-box">
           <h2>
  <span className="label">Title :</span>
  <span className="value">{item.title}</span>
</h2>
          </div>

          <div className="all-box">
          <h2>
  <span className="label">Author Name :</span>
  <span className="value">{item.author}</span>
</h2>

          </div>

          <div className="all-box">
            <p>{item.content}</p>
          </div>
<div> <button onClick={()=>handleDelete(item._id)}>Delete</button></div>
          


        </div>
      ))}



    </div>
  );
};

export default AllBlogs;








