import React from 'react';
import { Link } from 'react-router-dom';

function GiftCard({ gift }) {
    const {item, description, price, quantity, link_url, image_url} = gift

    return (
        <div>
            <h1>{item}</h1>
            <h2>${price}</h2>
            <h2>quantity: {quantity}</h2>
            <h3>{description}</h3>
            <img src={image_url} />
            <a href={link_url} target="_blank">Buy Here</a>
            <button>Edit</button>
            <button>Purchased</button>
        </div>
    );
}

export default GiftCard;