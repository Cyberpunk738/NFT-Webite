import React from 'react';
import './Trending.css';
import Button from './Button';

const Trending = () => {
  const trendingNFTs = [
    { id: 1, title: 'Azuki Zenith', creator: '@Zenith', price: '2.5 ETH', image: '/nft_card_2.png' },
    { id: 2, title: 'Cyber Punk', creator: '@NeoGen', price: '4.1 ETH', image: '/nft_card_1.png' },
    { id: 3, title: 'Ethereal Being', creator: '@Aura', price: '1.2 ETH', image: '/nft_card_3.png' },
    { id: 4, title: 'Silent Chibi', creator: '@Tears', price: '0.8 ETH', image: '/nft_card_4.png' }
  ];

  return (
    <section className="trending-section">
      <div className="trending-header">
        <h2 className="section-title">Trending <span>Collections</span></h2>
        <Button variant="outline">View All</Button>
      </div>

      <div className="trending-grid">
        {trendingNFTs.map(nft => (
          <div key={nft.id} className="trending-card">
            <div className="card-image-wrapper">
              <img src={nft.image} alt={nft.title} className="trending-img" />
              <div className="card-bid-badge">Place Bid</div>
            </div>
            <div className="card-info">
              <div>
                <h3 className="nft-title">{nft.title}</h3>
                <p className="nft-creator">{nft.creator}</p>
              </div>
              <div className="nft-price-wrapper">
                <span className="price-label">Current Bid</span>
                <span className="nft-price">{nft.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
