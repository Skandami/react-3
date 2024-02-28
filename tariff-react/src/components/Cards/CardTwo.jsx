
import Template from './Template';
import styles from './cardTwo.module.css';



function CardTwo() {
  return (
   <div className={styles.card}>
      <Template tariff="450" price={450} speed="50" />
    </div>);
}

export default CardTwo;
