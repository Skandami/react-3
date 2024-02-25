import React from 'react';
import Template from './Template';
import styles from './cardFour.module.css'; 

function CardFour() {
  return (
     <div className={styles.card}>
      <Template tariff="1000" price={1000} speed="200" />
    </div>);
}

export default CardFour;
