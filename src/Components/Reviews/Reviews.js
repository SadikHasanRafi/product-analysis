import React from 'react';
import useReviews from '../Hook/useReviews';
import Review from '../Review/Review';




const Reviews = () => {

    const [reviews,setReviews] = useReviews();
    

    
    return (
        <div>
            {
                reviews.map(review=><Review
                    review={review}
                    key={review.name}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;

