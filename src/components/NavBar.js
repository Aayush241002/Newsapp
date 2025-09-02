import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import countries from './countries'; // Country list with code, name, flag

const NavBar = () => {
  return (
    <>
      <nav className="navbar fixed-top bg-black navbar-dark shadow-sm py-3">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between flex-wrap">
          <NavLink className="navbar-brand fw-bold text-uppercase me-3" to="/">News Monkey</NavLink>

          <ul className="navbar-nav d-flex flex-row flex-wrap justify-content-center align-items-center w-100">
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
              <NavLink className="nav-link nav-underline text-uppercase" to="/health">health</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-underline text-uppercase" to="/science">science</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-underline text-uppercase" to="/technology">technology</NavLink>
            </li>
          </ul>

          <button
            className="btn btn-outline-light ms-md-3 mt-3 mt-md-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Offcanvas menu for extras */}
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
        </div>
      </div>
    </>
  );
};

export default NavBar;
