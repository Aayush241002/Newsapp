import React from 'react'
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import countries from './countries'; //  Import the country list

const NavBar = () => {

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-black navbar-dark shadow-sm py-3">
        <div className="container">
          <NavLink className="navbar-brand fw-bold text-uppercase" to="/">News Monkey</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link nav-underline text-uppercase" to="/">general</NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link nav-underline text-uppercase" to="/business">business</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-underline text-uppercase" to="/entertainment">entertainment</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-underline text-uppercase" to="/sports">sports</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-underline text-uppercase" to="health">health</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-underline text-uppercase" to="science">science</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-underline text-uppercase" to="/technology">technology</NavLink>
              </li>
      
              <li className="nav-item">
                <NavLink className="nav-link nav-underline text-uppercase" to="/about">About</NavLink>

              </li>

              <li className="nav-item">
                <NavLink className="nav-link nav-underline text-uppercase" to="/contact">Contact</NavLink>

              </li>

            </ul>


          </div>
        </div>
      </nav>
    </>

  )

}

export default NavBar