import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

function Location({ id, hotelName, menuitem }) {
    return (
        <Grid item width="100%">
            <Card width="100%">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {hotelName}
                    </Typography>
                    {menuitem}
                </CardContent>
            </Card>
        </Grid>
    );
}

export default Location;