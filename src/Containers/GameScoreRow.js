import React from 'react';
import { Grid } from '@material-ui/core';

import Frame from '../Components/Frame';

export default function GameScoreRow(props) {

    return(
        <Grid container direction="row">
            <Grid container item xs={1}>{props.player}</Grid>
            <Grid container item xs={1}>
                <Frame round={1} player={props.player}/>
            </Grid>
            <Grid container item xs={1}>
                <Frame round={2} player={props.player}/>
            </Grid>
            <Grid container item xs={1}>
                <Frame round={3} player={props.player}/>
            </Grid>
            <Grid container item xs={1}>
                <Frame round={4} player={props.player}/>
            </Grid>
            <Grid container item xs={1}>
                <Frame round={5} player={props.player}/>
            </Grid>
            <Grid container item xs={1}>
                <Frame round={6} player={props.player}/>
            </Grid>
            <Grid container item xs={1}>
                <Frame round={7} player={props.player}/>
            </Grid>
            <Grid container item xs={1}>
                <Frame round={8} player={props.player}/>
            </Grid>
            <Grid container item xs={1}>
                <Frame round={9} player={props.player}/>
            </Grid>
            <Grid container item xs={1}>
                <Frame round={10} player={props.player}/>
            </Grid>
            <Grid container item xs={1}>
                Total
            </Grid>
        </Grid>
    )
}