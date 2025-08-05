import React from 'react';
import './Healthy.css';

const Healthy = () => {
  return (
    <div className='explore-menu'>
      <h1>Why Our Alkaline Water Healthy?</h1>
      <h3 className='subheading'>
        Naturally enriched with essential alkaline minerals and pH 8+
      </h3>
      <div className='healthy-water-list-container'>
        <div className='healthy-water-list'>
          <div className='water-list-header'>
            <p className='water-title'> 8.0- 9.5 pH Alkanity</p>
          </div>
          <div className='water-list-body'>
            <p className='bold'> Recommended Value*: 8.0 - 9.5</p>
            <p>
              Naturally alkaline minerals and presence of bicarbonates impart a
              naturally alkaline pH. It helps boost immunity, has antioxidant
              properties, reduces inflammation and prevents chronic diseases.
            </p>
          </div>
        </div>
        <div className='healthy-water-list'>
          <div className='water-list-header'>
            <p className='water-title'> 10-15 mg Magnesium</p>
          </div>
          <div className='water-list-body'>
            <p className='bold'> Daily intake*: 320 - 400mg</p>
            <p>
              300 biochemical reactions in our body depend on magnesium. A vital
              macro mineral necessary for healthy bone, brain and heart
              functions. It helps control the body’s immune response.
            </p>
          </div>
        </div>
        <div className='healthy-water-list'>
          <div className='water-list-header'>
            <p className='water-title'>18-23 mg Calcium</p>
          </div>
          <div className='water-list-body'>
            <p className='bold'> Daily Intake* : 1000 - 2500mg</p>
            <p>
              Fortifies bones, teeth and the nervous system. Prevents
              deficiencies that cause osteoporosis and arthritis.
            </p>
          </div>
        </div>
        <div className='healthy-water-list'>
          <div className='water-list-header'>
            <p className='water-title'> 10-14 mg Silica</p>
          </div>
          <div className='water-list-body'>
            <p className='bold'> Daily Intake* : 10 - 30 mg</p>
            <p>
              Essential trace mineral known for its beauty benefits. Revitalises
              skin, teeth, hair, nails and brittle bones by aiding collagen
              formation.
            </p>
          </div>
        </div>
        <div className='healthy-water-list'>
          <div className='water-list-header'>
            <p className='water-title'> 40-60 mg Sodium</p>
          </div>
          <div className='water-list-body'>
            <p className='bold'> Daily Intake* : 1500-2400 mg</p>
            <p>
              Sodium plays a vital role in nerve and muscle function. It
              controls body fluids, promotes cell growth, improves brain
              function and relieves muscle cramps.
            </p>
          </div>
        </div>
        <div className='healthy-water-list'>
          <div className='water-list-header'>
            <p className='water-title'> 0.2 mg Fluoride</p>
          </div>
          <div className='water-list-body'>
            <p className='bold'> Daily Intake*: 2-10 mg</p>
            <p>
              Essential for healthy teeth and gums. Prevents the growth of
              harmful oral bacteria, rebuilds tooth enamel and prevents tooth
              decay.
            </p>
          </div>
        </div>
        <div className='healthy-water-list'>
          <div className='water-list-header'>
            <p className='water-title'>225-250 mg Bicarbonates</p>
          </div>
          <div className='water-list-body'>
            <p className='bold'> *Recommended Value: 70-400mg</p>
            <p>
              Bicarbonate, also known as hydrogen carbonate, is responsible for
              maintaining the balance of acids and bases pH value in the body.
              It is a natural component in mineral rich water. Bicarbonates play
              a vital role in buffering acids and reduce the acidity of dietary
              components.
            </p>
          </div>
        </div>{' '}
        <div className='healthy-water-list'>
          <div className='water-list-header'>
            <p className='water-title'> 2-3 mg Potassium</p>
          </div>
          <div className='water-list-body'>
            <p className='bold'> Daily intake*: 3,500–4,700 mg</p>
            <p>
              Regulates fluid balance, muscle contractions and nerve signals.
              Reduces blood pressure, prevents osteoporosis and kidney stones.
            </p>
          </div>
        </div>{' '}
        <div className='healthy-water-list'>
          <div className='water-list-header'>
            <p className='water-title'> 8.0- 9.5 pH Alkanity</p>
          </div>
          <div className='water-list-body'>
            <p className='bold'> 280-350 Total Dissolved Solids</p>
            <p>
              Naturally alkaline minerals and presence of bicarbonates impart a
              naturally alkaline pH. It helps boost immunity, has antioxidant
              properties, reduces inflammation and prevents chronic diseases.
            </p>
          </div>
        </div>{' '}
      </div>
      <p className='healthy-water-text'>
        *Recommended Intake Value signifies an average daily level of intake
        sufficient to meet the nutrient requirements of a healthy person.
      </p>
      <p className='healthy-water-text'>*Average Minerals in mg/litre</p>
    </div>
  );
};

export default Healthy;
