import React from 'react';
import Tile from './tile.jsx';

const Board = () => {
    return (
        <div className="board">
            <Tile key='1'/>
            <Tile key='2'/>
            <Tile key='3'/>
            <Tile key='4'/>
            <Tile key='5'/>
            <Tile key='6'/>
            <Tile key='7'/>
            <Tile key='8'/>
            <Tile key='9'/>
        </div>
    );
}

export default Board;
