import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ()=>{
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container">
  <NavLink className="navbar-brand" to="/">Aspire Technology</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active"  className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>
<br/><br/>
    </>
  );
}

export default Navbar;