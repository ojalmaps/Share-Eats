import React, { useEffect } from 'react';
import Location from './Location';
import { Grid } from '@material-ui/core';
import { getRecommended } from '../api';
import { useState } from 'react';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import { Fab } from '@material-ui/core';

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
      <Grid container 
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        >
        {locationViews}
        <Fab variant="extended" color="secondary">
          <ThumbUpAlt/>
            Recommend New
        </Fab>
      </Grid>
    );
}

export default RecommendationList;