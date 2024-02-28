
function Template(props) {
  return (
    <div className="card">
      <h4 className="title">Безлимитный {props.tariff}</h4>
          <p className="price">руб. {props.price}/мес.</p>
          <p className="speed">До {props.speed} мб/сек.</p>
          <p className="comment">{props.comment}</p>
    </div>
  );
}

Template.defaultProps = {
  comment: "Объем включенного трафика не ограничен." // По умолчанию, если не указана другая информация
};

export default Template;
