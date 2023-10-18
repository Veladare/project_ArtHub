import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import "./header.css"
import Logo from '../../assets/Logo.png'

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div className="logo-container">
          <img src={Logo} alt='Logo' style={{height:'100px', width:'150px'}}/>
          <div className="logo-text">
              <Link to="/">
                <h1>Berkeley Art Museum</h1>
              </Link>
              <h2>Browse the gallery of our featured artists!</h2>
          </div>
      </div>
      <div>
        {Auth.loggedIn() ? (
          <>
            <span>Welcome, {Auth.getProfile().data.username}!</span>
            <button id="logout" className="btn" onClick={logout}>
              Logout
            </button>
            <Link id="user" className="btn" to="/user/:userId">
              Update Email
            </Link>
          </>
        ) : (
          <>
            <Link id="login" className="btn" to="/login">
              Login
            </Link>
            <Link id="signup" className="btn" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
