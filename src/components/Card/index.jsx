import './card.style.css'

function Card (props) {
    return(
            <div className='card wrapper'>
            <img className='cardimg' src={props.image} alt="card-img" />
            <div className='sub-text'>
                <img className='star' src="star.png" alt="star" />
                <span>{props.rating}</span>
                <span className='light-text'>({props.ratingNo}).</span>
                <span className='light-text'>USA</span>
            </div>
            <p>{props.description}</p>
            <span>From${props.price} /&ensp;</span>
            <span className='light-text'>person</span>
        </div>
    )
}

export default Card