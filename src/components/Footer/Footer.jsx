import React from 'react';
import GoogleMap from './GoogleMap/GoogleMap';
import "./footer.scss"
const Footer = () => {
  return (<>
    <GoogleMap/>
    <footer className="footer-container">
      <div className="footer">
        <div className="social-media">
          <h3>Kết nối với chúng tôi</h3>
          <ul>
            <li><a href="https://www.facebook.com/comchay" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/comchay" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com/comchay" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;