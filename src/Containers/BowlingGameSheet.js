import React from 'react';

import GameScoreRow from './GameScoreRow';

export default function BowlingGameSheet(props) {
    return (
        <div className="centered">
            <GameScoreRow player={props.players[0]} />
            <GameScoreRow player={props.players[1]} />
        </div>
    )
}