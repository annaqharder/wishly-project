import React from "react";
import GiftCard from './GiftCard';

function GiftList({ allGifts }) {

    const giftsArray = allGifts.map((gift) => {
        <GiftCard
            key={gift.id}
            gift={gift}
        />
    });

    return (
        <div>
            {giftsArray}
        </div>
    );
}

export default GiftList;