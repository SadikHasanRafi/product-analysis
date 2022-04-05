

import React, { useEffect, useState } from 'react';

const useReviews = () => {
    
    const [review,setReviews] = useState([]);

    useEffect(()=>{
        fetch("FakeReview.json")  
        .then(res => res.json())
        .then(data=>setReviews(data));
    },[]);
    
    return [review,setReviews];

};

export default useReviews;