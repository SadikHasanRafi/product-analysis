import React from 'react';

function Review (props) {
    const {name,rating,review} = props.review
   
    return (
        <div>
           <p>{name}</p>
           <p>{rating}</p>
           <p>{review}</p>
        </div>
    );
};

export default Review;