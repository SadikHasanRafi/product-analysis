import React, { useEffect, useState } from 'react';

const useReviews = () => {
    
    const [review,setReviews] = useState([]);


    // Fetching data
    useEffect(()=>{
        fetch("FakeReview.json")  
        .then(res => res.json())
        .then(data=>setReviews(data));
    },[]);
    
    //Data export
    return [review,setReviews];

};

export default useReviews;