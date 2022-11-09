import "./card.style.css";

function Card(props) {
  return (
    <div className="card wrapper">
      {props.item.openSpots === 0 ? (
        <div className="badge">SOLDOUT</div>
      ) : (
        <div className="badge">AVAILABLE</div>
      )}
      <img className="cardimg" src={props.item.coverImg} alt="card-img" />
      <div className="sub-text">
        <img className="star" src="star.png" alt="star" />
        <span>{props.item.stats.rating}</span>
        <span className="light-text">({props.item.stats.reviewCount}).</span>
        <span className="light-text">USA</span>
      </div>
      <p className="description">{props.item.description}</p>
      <div className="lowerText">
        <div className="price">From${props.item.price} /&ensp;</div>
        <div className="light-text">person</div>
      </div>
    </div>
  );
}

export default Card;
