import React from 'react';

let Tile = (props) => {

    return ( 
        <div onClick={() => props.handleTileClick(props.tile)}>
            <p> {props.board[props.tile]} </p>
        </div>
    );
}

export default Tile;
