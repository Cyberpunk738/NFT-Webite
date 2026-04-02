import React from 'react';
import './Footer.css';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span>NFT Marketplace</span>
          </div>
          <p className="footer-bio">
            The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
          </p>
          <div className="footer-socials">
            <div className="social-icon">X</div>
            <div className="social-icon">Dk</div>
            <div className="social-icon">In</div>
          </div>
        </div>

        <div className="footer-links-wrapper">
          <div className="footer-link-group">
            <h3>Marketplace</h3>
            <ul>
              <li><a href="#">All NFTs</a></li>
              <li><a href="#">Solana NFTs</a></li>
              <li><a href="#">Art</a></li>
              <li><a href="#">Collectibles</a></li>
              <li><a href="#">Domain Names</a></li>
              <li><a href="#">Music</a></li>
            </ul>
          </div>
          <div className="footer-link-group">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Platform Status</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
          <div className="footer-link-group">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Ventures</a></li>
              <li><a href="#">Grants</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NFT Marketplace. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
