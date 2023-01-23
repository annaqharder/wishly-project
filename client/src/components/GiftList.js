import React from "react";
import GiftCard from './GiftCard';

function GiftList({ allGifts }) {
    console.log(allGifts)

    const giftsArray = allGifts.map((gift) => {
        return (
            <GiftCard
                key={gift.id}
                gift={gift}
            />
        )
    });

    console.log(giftsArray)

    return (
        <div>
            {giftsArray}
        </div>
    );
}

export default GiftList;