import React, { useState } from "react";
import { Grid } from '@material-ui/core';

export default function Frame(props) {
    const [frameScore, setFrameScore] = useState(0);
    console.log('frame score', frameScore);
    console.log('player', props.player)

    const handleFrameChange = (tryNum, value) => {
        if (value === 10 || value === 'x' || value === 'X') {
            console.log('strike');
        } else if (value === '/') {
            console.log('spare');
        } else {
            const additionalScore = parseInt(value);
            setFrameScore(frameScore + additionalScore);
        }
    }
    
    return (
        <Grid container direction="row" spacing={1}>
            <Grid container item xs={12}>
                <div className="fullWidth centered">
                    Frame {props.round}
                </div>
            </Grid>
            <Grid container item xs={6}>
                <input type="number" onChange={e => handleFrameChange(1, e.target.value)} />
            </Grid>
            <Grid container item xs={6}>
                <input type="number" onChange={e => handleFrameChange(2, e.target.value)} />
            </Grid>
            <Grid container item xs={12}>
                <div className="fullWidth centered">
                    Frame Total: {frameScore}
                </div>
            </Grid>
        </Grid>
    )
}