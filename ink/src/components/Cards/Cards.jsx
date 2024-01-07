// Cards.js
import './Cards.scss';
import { ways } from './data';
import { useState } from 'react';
import TabButton from '../TabButton/TabButton';
import ItemCard from '../ItemCard/ItemCard';

export default function Cards(props) {
  const [showFrance, setShowFrance] = useState(true);
  const [showGermany, setShowGermany] = useState(false);
  const [showEngland, setShowEngland] = useState(false);

  function showContent(country) {
    setShowFrance(country === 'France');
    setShowGermany(country === 'Germany');
    setShowEngland(country === 'England');
  }

  const franceItems = ways.slice(0, 6);
  const germanyItems = ways.slice(6, 12);
  const englandItems = ways.slice(12);

  return (
    <section className="cards">
      <div className="container">
        <div className="cards-top">
          <h3 className="cards-title">Репродукции</h3>
          <div className="cards-buttons">
            <TabButton onClick={() => showContent('France')} text="Франция" active={showFrance} />
            <TabButton onClick={() => showContent('Germany')} text="Германия" active={showGermany} />
            <TabButton onClick={() => showContent('England')} text="Англия" active={showEngland} />
          </div>
        </div>
        <div className={showFrance ? 'show-content' : 'content'}>
          <div className="cards-container">
            {franceItems.map((item, index) => (
              <ItemCard
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
                subtitle={item.subtitle}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className={showGermany ? 'show-content' : 'content'}>
          <div className="cards-container">
            {germanyItems.map((item, index) => (
              <ItemCard
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
                subtitle={item.subtitle}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className={showEngland ? 'show-content' : 'content'}>
          <div className="cards-container">
            {englandItems.map((item, index) => (
              <ItemCard
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
                subtitle={item.subtitle}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
