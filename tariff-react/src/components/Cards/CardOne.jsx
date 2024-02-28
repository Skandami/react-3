// ParentComponent.js

import Template from './Template';
import styles from './cardOne.module.css'; 


function CardOne() {
  return (
    <div className={styles.card} >
      <Template tariff="300" price={300} speed="10" />
    </div>);
}

export default CardOne;

