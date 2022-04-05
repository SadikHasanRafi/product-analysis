import React from 'react';
import useReviews from '../Hook/useReviews';
import Review from '../Review/Review';


const Reviews = () => {

    // Getting data
    const [reviews,setReviews] = useReviews();
    
    return (
        <div>
            {
                // Mapping data
                reviews.map(review=><Review
                    review={review}
                    key={review.id}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;

