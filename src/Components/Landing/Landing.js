import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from "./styles";
import LandingImage from '../../assets/Landing/Landing.svg';

function Landing() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} sm={6}>
                <Typography variant='h3' className={classes.heading}>
                    Fresh vegetables at your doorstep.
                </Typography>
                <Typography variant='body2' className={classes.bodyText}>
                    All the vegetables at the affordable price.<br/>
                    We stock a large collection of healthy vegetables for you to order online.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src={LandingImage} alt="" style={{width:"84%"}} />
            </Grid>
        </Grid>
    )
}

export default Landing;
