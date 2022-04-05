import React from 'react';
import useReviews from '../Hook/useReviews';
import Review from '../Review/Review';




const Reviews = () => {

    const [reviews,setReviews] = useReviews();
    

    
    return (
        <div>
           <p className='text-center text-6xl'>{reviews.length}</p>
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

