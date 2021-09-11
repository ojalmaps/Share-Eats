import React from 'react';
import RecommendationList from './RecommendationList';
import WishList from './WishList';


function Feed() {
    return (
        <>
            <h2>Friend's Feed</h2>
            <RecommendationList />
            <WishList />
        </>
    );
}

export default Feed;