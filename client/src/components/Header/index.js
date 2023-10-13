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
    <header className=" mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <div style={{paddingLeft:'50px', paddingRight:'50px'}}>
          <img src={Logo} alt='Logo' style={{height:'100px', width:'150px'}}/>
        </div>
        <div>
          <Link to="/">
            <h1 className="m-0">Berkeley Art Museum</h1>
          </Link>
          <p className="m-0">Browse the gallery of our featured artists!</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Welcome, {Auth.getProfile().data.username}!</span>
              <button id="logout" className="btn btn-lg m-2" onClick={logout}>
                Logout
              </button>
              <Link id="artist" className="btn btn-lg m-2" to="/artist">
                Artist
              </Link>
            </>
          ) : (
            <>
              <Link id="login" className="btn btn-lg m-2" to="/login">
                Login
              </Link>
              <Link id="signup" className="btn btn-lg m-2" to="/signup">
                Signup
              </Link>
              <Link id="artist" className="btn btn-lg m-2" to="/artist">
                Artist
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
