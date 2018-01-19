import React from 'react';

class Tile extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            id: this.props.tile,
            symbol: null
        }
    }

    handleClick(){
        this.setState({symbol: this.props.playerSymbol});
        this.props.handleTileClick;
    }

    render(){
        let id = this.state.id;
        return (
            <div onClick={() => {this.props.handleTileClick();
                this.handleClick();}}>
                <p>{this.state.symbol}</p>
            </div>
        )
    }

}

export default Tile;
