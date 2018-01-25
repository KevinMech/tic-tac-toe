import React from 'react';
import Tile from './tile.jsx';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            board: []
        }
    }

    componentDidMount(){
        let tiles = [];
        for(let i = 0; i < 9; i++){
            tiles.push(<Tile key={i} tile={i} playerSymbol={this.props.playerSymbol} handleTileClick={this.props.handleTileClick}/>);
        }
        this.setState({board: tiles});
    }

    render(){
        return (
            <div className="board">
                {this.state.board}
            </div>
        );
    }
}

export default Board;
