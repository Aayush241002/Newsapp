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


            </ul>
            <button
              className="btn btn-outline-light position-absolute top-0 end-0 m-3"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              ☰
            </button>


          </div>
        </div>
      </nav>
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">More Options</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <a className="nav-link nav-underline text-uppercase dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </a>
          <ul className="dropdown-menu">
            {countries.map((country) => (
              <li key={country.code}>
                <NavLink className="dropdown-item d-flex align-items-center" to={`/country/${country.code}`}>
                  <span className="me-2">{country.flag}</span>
                  {country.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink className="nav-link text-white mb-2 my-3" to="/about">About</NavLink>
          <NavLink className="nav-link text-white mb-2" to="/contact">Contact</NavLink>
          {/* Add more links or content here */}
        </div>
      </div>


    </>

  )

}

export default NavBar