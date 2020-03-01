import StarRatings from 'react-star-ratings';
import React from 'react';

const Rating = ({ rating, readonly, onChange, large }) => {

    const onChangeRating = newRating => {
        onChange(newRating);
    }

    let starDimension = "12px";
    let starSpacing = "1px";

    if (large) {

        starDimension = "20px";
        starSpacing = "5px";
    }

    return (

        readonly ? (<StarRatings
            rating={rating}
            starRatedColor="orange"
            starDimension={starDimension}
            starSpacing={starSpacing}
        />) : (
                <StarRatings
                    rating={rating}
                    starRatedColor="orange"
                    starDimension={starDimension}
                    starSpacing={starSpacing}
                    changeRating={onChangeRating}
                />
            )
    );

}

export default Rating;