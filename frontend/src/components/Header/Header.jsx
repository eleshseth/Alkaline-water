import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>
          Pure Blessings from the Himalayas  Order
          Today!
        </h2>
        <p>
          Bring home the sacred essence of the Himalayas. Pure, authentic Ganga
          water collected with care. A divine gift, delivered to your doorstep
          Order now!
        </p>
        <button onClick={scrollToMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
