import React, { useState } from "react";
import { Grid } from '@material-ui/core';

export default function Frame(props) {
    const [try1, setTry1] = useState(0);
    const [try2, setTry2] = useState(0);

   
    const updateFrameAndTotal = (frame, value) => {
        if (frame === 1) {
            setTry1(try1 + parseInt(value));
        } else {
            setTry2(try2 + parseInt(value));
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
                <input type="text" min="0" onChange={e => updateFrameAndTotal(1, e.target.value)} style={{width: '75%'}}/>
            </Grid>
            <Grid container item xs={6}>
                <input type="text" min="0" onChange={e => updateFrameAndTotal(2, e.target.value)} style={{width: '75%'}}/>
            </Grid>
            <Grid container item xs={12} className="largeMarginTop">
                <div className="fullWidth centered">
                    Frame Total: {(try1 + try2)}
                </div>
            </Grid>
        </Grid>
    )
}