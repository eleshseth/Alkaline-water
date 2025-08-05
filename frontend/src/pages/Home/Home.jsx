import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Recycled from '../../components/Recycled/Recycled';
import Healthy from '../../components/Healthy/Healthy';
import { assets } from '../../assets/assets';
const Home = () => {
  const [category, setCategory] = useState('All');
 
  return (
    <div>
      <Header />

      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <div className='recycle'></div>
      <Healthy />
      <img src={assets.copy} width='100%' height='100%' />
    </div>
  );
};

export default Home;
