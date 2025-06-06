import React from 'react';
import './Sustainability.css';
import { assets } from '../../assets/assets';

const Sustainability = () => {
  return (
    <div>
      <div className='sustainability-container'>
        <div className='sustainability-image'>
          <img src={assets.sustain} alt='Sustainability' />
        </div>
      </div>
      <div className='Info'>
        <h1 className='heading'>PLASTIC NEUTRALITY AND RECYCLING</h1>
        <p className='p1'>
          Did you know that PET is the most recycled plastic in the world?
          Globally 45% of PET gets recycled. In India, 92% gets recycled due to
          a unique recycling ecosystem involving ragpickers, kabadiwalas and
          recyclers.
        </p>
        <p className='p2'>
          As of 2023 Aava has recycled 75 million PET bottles. All our bottles
          have buy-back prices printed. We work with waste management agencies
          which ensure PET bottle collection.
        </p>
        <p className='p3'>
          This collection is done through EPR partner and our in-house recycling
          ecosystem. EPR (Extended Producers Responsibility) is geography and
          brand agnostic. Our recyclable PET bottles are repurposed into fabric,
          yarn, quilts, drainpipes, inner linings of cars, utilized in
          architecture and road-building.
        </p>
      </div>
      <div className='sustain-image'>
        <h1 className='image-heading'>SUSTAINABILITY IMPACT</h1>{' '}
      </div>{' '}
      <div className='impact-container'>
        <img
          src={assets.impact}
          alt='Sustainability Impact'
          className='desktop-impact'
        />
        <img
          src={assets.impactmobile}
          alt='Sustainability Impact'
          className='mobile-impact'
        />
      </div>
    </div>
  );
};

export default Sustainability;
