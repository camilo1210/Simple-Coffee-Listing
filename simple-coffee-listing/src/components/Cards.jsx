import React from 'react';
import './Cards.css';

const Card = ({ coffee }) => {
    const { name, image, price, rating, votes, popular, available } = coffee;

    return (
    <div className={`card ${!available ? 'unavailable' : ''}`}>
        {popular && <span className="tag">Popular</span>}
        <img src={image} alt={name} />
        
        <div className="card-info">
        <div className="card-header">
            <h3 className='name'>{name}
                <span className="price">{String(price)}</span>
            </h3>
        </div>
        {available ? (
            rating && votes ? (
                <p className="rating">⭐ {rating} ({votes} votes)</p>
            ) : (
                <p className="rating">No ratings</p>
            )
        ) : (
            <p className="sold-out">Sold out</p>
        )}
        </div>
    </div>
    );
};

export default Card;
