import React from 'react';

class Tile extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            symbol: null
        }
    }
    render(){
        return (
            <div>
                <p>{this.state.symbol}</p>
            </div>
        )
    }

}

export default Tile;
