import React from 'react';

class Selector extends React.Component {
    render(){
        return(
            <div>
                <p>Please select player symbol: </p>
                <div className="selector">
                    <button className='itemo' onClick={() => this.props.handleSelection('o')}>O</button>
                    <button className='itemx' onClick={() => this.props.handleSelection('x')}>X</button>
                </div>
            </div>
        );
    }
}

export default Selector;
