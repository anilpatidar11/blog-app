import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllBlogs from "./pages/AllBlogs";
import CreateBlog from "./pages/CreateBlog";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}>
   
          </Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route
            path="/create"
            element={
              <ProtectedRoute>
          
                <CreateBlog />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/blog"
            element={
              <ProtectedRoute>
           
                <AllBlogs />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
