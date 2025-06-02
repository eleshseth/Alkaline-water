import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';



const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Naturally Alkaline Mineral Water. Origin Aravalli Hills.</h1>
      <p className='explore-menu-text'>
        The Aava story began when time began, before the Himalayas or the Alps
        were born. This is the story of the majestic Aravallis, one of the
        world's oldest mountain ranges, a legend that lives on with the passage
        of time from where Aava originates. Drop by drop, for 20 years, Aava
        trickles down from the catchment area to our deep underground
        reservoirs. Along the way it is purified as it passes through layers of
        alluvium and clay that act as natural filters. To ensure purity and an
        unaltered natural mineral composition in every sip, our bottling
        environment adheres to the toughest international certification
        standards.
      </p>

      <button className='watch-button'>Watch</button>
    
      
     
      {/* <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev == item.menu_name ? 'All' : item.menu_name
                )
              }
              key={index}
              className='explore-menu-list-item'>
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt=''
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div> */}
    
    </div>
  );
};

export default ExploreMenu;
