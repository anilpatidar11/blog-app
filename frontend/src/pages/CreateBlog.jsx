import axios from "axios";
import React, { useState } from "react";
import '../blog.css'
const CreateBlog = () => {
  const [formData, setFormdata] = useState({
    title: "",
    content: "",
    author: "",
  });
  
const url = "https://blog-app-ahxa.onrender.com"
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormdata({ ...formData, [name]: value });
  };


const handleClear = () => {
  setFormdata({
    title: "",
    author: "",
    content: "",
  });
};




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${url}/api/add`,
        formData,{
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
    
      if (res.data.status) {
        alert("Blog Succesfully saved");
         handleClear()
      }


    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  console.log(formData);

  return (  
    <div className="blogg">
    <div className="blog-div">
      <form onSubmit={handleSubmit} className="blog-form-div">
        <div className="blog-box">
        <label htmlFor="title"> Title : </label>
        
          <input
          type="text"
          name="title"
          onChange={handleChange}
            id="title"
            value={formData.title}
        /> </div>
     
        
        <div className="blog-box">
          
           <label htmlFor="author"> Author : </label>
        <input
          type="text"
          name="author"
          onChange={handleChange}
            id="author"
             value={formData.author}
        />   
</div>
       


        <div className="blog-box">
          
           <label htmlFor="content"> Content :  </label>
        <textarea
  name="content"
  onChange={handleChange}
  id="content"
  rows="10"
            placeholder="Write your blog content here..."
             value={formData.content}
></textarea>

</div>
        


      

    

        <button type="submit"> Submit</button>
      </form>
    </div>

    </div>
  );
};

export default CreateBlog;
