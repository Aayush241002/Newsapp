import React from 'react';

const Contact= () => {
    return (
      <div className="contact-container" style={{margin:"100px"}}>
        <h2 className="contact-title text-danger my-3">Contact Us</h2>

        <p className="contact-description">
          Have questions, suggestions, or spotted an issue? We're here to help. Reach out to the NewsMonkey team through any of the platforms below, and we'll get back to you as soon as possible.
        </p>

        <ul className="contact-list">
          <li><strong>Email:</strong> support@newsmonkey.io</li>
          <li><strong>Twitter:</strong> <a href="https://twitter.com/newsmonkeyapp" target="_blank" rel="noopener noreferrer">@newsmonkeyapp</a></li>
          <li><strong>Instagram:</strong> <a href="https://instagram.com/newsmonkey.io" target="_blank" rel="noopener noreferrer">@newsmonkey.io</a></li>
        </ul>

        <p className="contact-note">
          We're always improving — your feedback shapes the future of NewsMonkey!
        </p>
      </div>
    );
  
}

export default Contact;
