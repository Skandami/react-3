import React from 'react';

export default function Template(props) {
  return (
    <div className={`card ${props.style}`}>
      <h4 className="title">Безлимитный {props.tariff}</h4>
      <p className="price">руб. {props.price}/мес.</p>
      <p className="speed">До {props.speed} мб/сек.</p>
      <p className="comment">{props.comment}</p>
      <h2 className='choice'>{props.chosen ? "Тариф выбран!" : props.choice}</h2>
    </div>
  )
}

 Template.defaultProps = {
   comment: "Объем включенного трафика не ограничен.",
   choice: "Хочу этот тариф!"
};
