import React from 'react';
import './Hero.css';
import Button from './Button';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-badge">
        <span className="badge-dot"></span>
        <span className="badge-new">NEW</span>
        <span className="badge-text">The Future of Digital Ownership is Here</span>
      </div>
      
      <h1 className="hero-title">
        Own the Future of<br />
        Digital Collectibles
      </h1>
      
      <p className="hero-subtitle">
        Discover, trade, and showcase unique NFTs in a decentralized marketplace built for creators and collectors.
      </p>
      
      <div className="hero-cta">
        <Button variant="outline" icon={<span>+</span>} className="glow-btn">
          CONNECT WALLET
        </Button>
      </div>
    </section>
  );
};

export default Hero;
