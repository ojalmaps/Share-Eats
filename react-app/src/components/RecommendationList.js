import React, { useEffect } from 'react';
import Location from './Location';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { getRecommended } from '../api';
import { useState } from 'react';

function RecommendationList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
      getRecommended().then((data) => {
        setLocations(data.recommended);
      });
    }, []);

    const locationViews = locations.map(location => (
        <Location key={location.id} {...location} />));

    return (
      <Grid container spacing={3}>
        {locationViews}
        <Button variant="contained" color="primary">
          Add New Recommended
        </Button>
      </Grid>
    );
}

export default RecommendationList;