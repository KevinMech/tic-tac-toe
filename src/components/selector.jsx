import React from 'react';

const Selector = (props) => {
    return(
        <div>
            <p>Please select player symbol: </p>
            <div className="selector">
                <button className='itemo' onClick={() => props.handleSymbolSelection(props.symbols.O)}>O</button>
                <button className='itemx' onClick={() => props.handleSymbolSelection(props.symbols.X)}>X</button>
            </div>
        </div>
    );
}

export default Selector;
