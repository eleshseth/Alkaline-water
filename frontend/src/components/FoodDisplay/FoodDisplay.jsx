import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import Fooditem from '../Fooditem/Fooditem.jsx';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
      <h2>Shop Our Alkaline Water From Here</h2>
      <div className='food-display-list'>
        {food_list.map((item) => {
          if (category === 'All' || item.category == category) {
            const isOutOfStock = item.stock <= 0;
            return (
              <Fooditem
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={
                  item.images && item.images.length > 0
                    ? item.images[0]
                    : item.image
                }
                stock={item.stock}
                discount={item.discount}
                className={isOutOfStock ? 'out-of-stock' : ''}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
