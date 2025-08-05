import React from 'react';
import './ExploreMenu.css';

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Ionized Alkaline Water</h1>
      <p className='explore-menu-text'>
        DRIINKOXYGEN offers ionized alkaline water for a healthier you.
        DRIINKOXYGEN provides superior hydration and enhances well-being. True
        health starts from within, and ionized alkaline water supports a
        revitalized body and mind. The water has a balanced pH level and is
        fortified with essential minerals like calcium, magnesium, sodium, and
        potassium. This supports optimal hydration and cellular function. The
        unique ionization process creates water with a higher potential for
        antioxidants. This can help neutralize free radicals and reduce
        oxidative stress in the body. The smaller molecular clusters penetrate
        cells more efficiently, enhancing nutrient and oxygen delivery while
        aiding in detoxification. This results in faster and deeper hydration.
        DRIINKOXYGEN provides a path to a healthier you, whether you seek
        enhanced performance and faster recovery, or aim for improved digestion,
        boosted immunity, and healthier skin. Explore the range of premium
        ionized alkaline water products. Start a journey of
        transformative hydration.
      </p>

      <button
        className='watch-button'
        onClick={() =>
          window.open('https://www.youtube.com/watch?v=uDACCsXARLU', '_blank')
        }>
        Watch
      </button>

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
