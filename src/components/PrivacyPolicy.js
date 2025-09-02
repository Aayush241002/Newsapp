import React from 'react'

const PrivacyPolicy = () =>  {
      const lastUpdated = 'August 5, 2025'; 

    return (
        
      <div className="privacy-container" style={{margin:"100px"}}>
        <h2 className="privacy-title text-danger my-3">Privacy Policy</h2>
        
        <p className="privacy-text my-3">
          At NewsMonkey, we value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
        </p>

        <p className="privacy-text">
          <strong>1. Information Collection:</strong> We do not collect any personal information such as your name, email, or location unless you explicitly provide it through contact forms. Our site operates primarily using publicly available news data.
        </p>

        <p className="privacy-text">
          <strong>2. Cookies and Tracking:</strong> To enhance your browsing experience, we use minimal cookies for functional purposes like remembering your preferences and sessions. We do not use cookies for advertising or tracking your behavior across other sites.
        </p>

        <p className="privacy-text">
          <strong>3. Data Security:</strong> We employ industry-standard security measures to protect the information you share with us. However, please understand that no internet transmission or storage method is 100% secure, so use caution when sharing sensitive data.
        </p>

        <p className="privacy-text">
          <strong>4. Third-Party Services:</strong> Our site may contain links or integrations with trusted third-party services (such as news APIs). These third parties have their own privacy policies and are responsible for how they handle your data.
        </p>

        <p className="privacy-text">
          <strong>5. Your Rights:</strong> You have the right to access, update, or delete any personal data you provide to us. If you have questions about your data or want to request removal, please contact us through the Contact page.
        </p>

        <p className="privacy-text">
          <strong>6. Children’s Privacy:</strong> Our services are not directed to individuals under 13 years of age. We do not knowingly collect personal information from children.
        </p>

        <p className="privacy-text">
          <strong>7. Policy Updates:</strong> We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly to stay informed.
        </p>

        <p className="privacy-text">
          Your continued use of NewsMonkey constitutes acceptance of this policy.
        </p>

        <p className="privacy-text" style={{ marginTop: '2rem', fontStyle: 'italic' }}>
          Last updated: {lastUpdated}
        </p>
      </div>
    )
  
}

export default PrivacyPolicy