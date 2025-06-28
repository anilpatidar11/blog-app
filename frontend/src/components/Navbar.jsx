
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <Link className="navbar-brand" to="/">My Blog</Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Your Blog</Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <button onClick={handleLogout} className="btn btn-danger btn-sm">Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


