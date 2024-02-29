import React, { useState } from 'react';
import './App.css';
import Template from './components/Cards/Template';
import styles from './styles/card.module.css';
import Header from './components/Cards/header/Header';
import cardData from './data.json'; 

function App() {
  const [chosenTariff, setChosenTariff] = useState(null);

  const handleCardClick = (tariff) => {
    setChosenTariff(tariff);
  };

  return (
    <div>
      <Header />
      <div className='container'>
      {cardData.map((card, index) => (
        <div key={index} onClick={() => handleCardClick(card.tariff)}>
          <Template {...card} style={styles[card.style]} chosen={chosenTariff === card.tariff} />
        </div>
      ))}
    </div></div>
  );
}

export default App;