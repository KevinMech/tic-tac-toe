import React from 'react';
import Tile from './tile.jsx';

class Board extends React.Component{
    render(){
        return (
            <div className="board">
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
            </div>
        );
    }
}

export default Board;