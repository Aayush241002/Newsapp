import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer =  () => {
    return (
      <div>    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <h5 className="mb-3"><Link to="/" style={{textDecoration:"none" , color:"white"}}>NewsMonkey</Link></h5>
            <p className="mb-0">
                Stay informed with the latest breaking news, headlines, and stories from around the world.
            </p>
          </div>
          
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <div className="social-icons mb-3">
              <Link to="https://github.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </Link>
              <Link to="https://linkedin.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </Link>
              <Link to="https://twitter.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </Link>
               <Link to="https://instagram.com" className="text-white" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
               </Link>
            </div>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Newsapp. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="row mt-3">
          <div className="col-12 text-center">
            <div className="footer-links">
              <Link to="/about" className="text-white mx-2">About</Link>
              <Link to="/PrivacyPolicy" className="text-white mx-2">Privacy Policy</Link>
              <Link to="/TermsConditions" className="text-white mx-2">Terms & Condition</Link>
              <Link to="/contact" className="text-white mx-2">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer></div>
    )
  
}

export default Footer