import React, { useState } from 'react';
import './Menu.css';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Menu = () => {
  const [category, setCategory] = useState('All');

  return (
    <div className="menu-container">
      <h1>Our Products</h1>
      <FoodDisplay category={category} />
    </div>
  );
};

export default Menu;