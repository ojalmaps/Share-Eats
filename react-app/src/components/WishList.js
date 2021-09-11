import React from 'react';
import Location from './Location';
import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { getWishlist } from '../api';
import Star from '@material-ui/icons/Star';
import { Fab } from '@material-ui/core';

function WishList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
      getWishlist().then((data) => {
        setLocations(data.wishlist);
      });
    }, []);

    const locationViews = locations.map(location => (
        <Location key={location.id} {...location} />));

    return (
      <Grid container 
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}>
        {locationViews}
        <Fab variant="extended" color="secondary">
          <Star />
            New Wish
        </Fab>
      </Grid>
    );
}

export default WishList;