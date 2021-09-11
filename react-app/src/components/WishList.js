import React from 'react';
import Location from './Location';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { getWishlist } from '../api';

function WishList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
      getWishlist().then((data) => {
        setLocations(data.wishlist);
      });
    }, []);

    const locationViews = locations.map(location => (
      <Grid item>
        <Location key={location.id} {...location} />
      </Grid>));

    return (
      <Grid container spacing={3}>
        {locationViews}
        <Button variant="contained" color="primary">
          Add New Wishlist Item
        </Button>
      </Grid>
    );
}

export default WishList;