import "./card.style.css";

function Card(props) {
  return (
    <div className="card wrapper">
      {props.openSpots === 0 ? (
        <div className="badge">SOLDOUT</div>
      ) : (
        <div className="badge">AVAILABLE</div>
      )}
      <img className="cardimg" src={props.coverImg} alt="card-img" />
      <div className="sub-text">
        <img className="star" src="star.png" alt="star" />
        <span>{props.stats.rating}</span>
        <span className="light-text">({props.stats.reviewCount}).</span>
        <span className="light-text">USA</span>
      </div>
      <p className="description">{props.description}</p>
      <div className="lowerText">
        <div className="price">From${props.price} /&ensp;</div>
        <div className="light-text">person</div>
      </div>
    </div>
  );
}

export default Card;
