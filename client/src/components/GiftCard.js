import React from 'react';
import { Link } from 'react-router-dom';

function GiftCard({ gift }) {
    const {id, item, description, price, quantity, link_url, image_url} = gift

    return (
        <div>
            <h1>{item}</h1>
            <h2>{price}</h2>
            <h2>{quantity}</h2>
            <h3>{description}</h3>
            <img src={image_url} />
            <p>{link_url}</p>
        </div>
    );
}

export default GiftCard;