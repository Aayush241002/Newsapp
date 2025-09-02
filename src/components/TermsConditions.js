import React from 'react';

const TermsConditions = () => {
 const lastUpdated = 'August 5, 2025'; // manually updated when you change terms

    return (
      <div className="terms-container" style={{margin:"100px"}}>
        <h2 className="terms-title text-danger my-3">Terms & Conditions</h2>

        <p className="terms-text my-3">
          By accessing and using NewsMonkey, you agree to comply with the following terms and conditions. NewsMonkey is a news aggregator that displays publicly available news using third-party APIs. We are not responsible for the accuracy, completeness, or timeliness of the content provided by external news sources.
        </p>

        <p className="terms-text">
          You agree not to misuse the service or attempt to interfere with its operation. NewsMonkey is provided for personal, non-commercial use. Any automated scraping, mass data collection, or unauthorized reproduction of content is strictly prohibited.
        </p>

        <p className="terms-text">
          The service is offered "as-is" without any warranties, express or implied. We do not guarantee uninterrupted access, error-free operation, or permanent availability of the platform.
        </p>

        <p className="terms-text">
          We reserve the right to modify, suspend, or discontinue any part of the platform at any time without prior notice.
        </p>

        <p className="terms-text updated-date" style={{ marginTop: '2rem', fontStyle: 'italic' }}>
          Last updated: {lastUpdated}
        </p>
      </div>
    );
  
}

export default TermsConditions;
