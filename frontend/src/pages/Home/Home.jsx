import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Recycled from '../../components/Recycled/Recycled';
import Healthy from '../../components/Healthy/Healthy';
const Home = () => {
  const [category, setCategory] = useState('All');
 
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <div className='recycle'></div>
      <Healthy/>
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
