import React from 'react';

class Selector extends React.Component {
    render(){
        return(
            <div>
                <p>Please select player symbol: </p>
                <div className="selector">
                    <button className='itemo' onClick={() => this.props.handleSymbolSelection('O')}>O</button>
                    <button className='itemx' onClick={() => this.props.handleSymbolSelection('X')}>X</button>
                </div>
            </div>
        );
    }
}

export default Selector;
