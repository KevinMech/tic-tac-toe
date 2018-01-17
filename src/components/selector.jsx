import React from 'react';

class Selector extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <p>Please select player symbol: </p>
                <div className="selector">
                    <button className='itemx' onClick={() => this.props.handleSelection('x')}>X</button>
                    <button className='itemo' onClick={() => this.props.handleSelection('o')}>O</button>
                </div>
            </div>
        );
    }
}

export default Selector;
