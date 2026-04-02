import React from 'react';
import './NFTShowcase.css';

const NFTShowcase = () => {
  const cards = [
    { id: 1, image: '/nft_card_1.png' },
    { id: 2, image: '/nft_card_2.png' },
    { id: 3, image: '/nft_card_3.png' },
    { id: 4, image: '/nft_card_4.png' },
    { id: 5, image: '/nft_card_5.png' },
  ];

  return (
    <section className="nft-showcase">
      <div className="cards-container">
        {cards.map((card, index) => {
          let positionClass = '';
          if (index === 0) positionClass = 'far-left';
          else if (index === 1) positionClass = 'mid-left';
          else if (index === 2) positionClass = 'center';
          else if (index === 3) positionClass = 'mid-right';
          else if (index === 4) positionClass = 'far-right';

          return (
            <div 
              key={card.id} 
              className={`nft-card ${positionClass}`}
            >
              <img src={card.image} alt="NFT Character" className="nft-card-img" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NFTShowcase;
