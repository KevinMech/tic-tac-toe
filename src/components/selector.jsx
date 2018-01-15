import React from 'react';

class Selector extends React.Component {
    render(){
        return(
            <div>
                <p>Please select player symbol: </p>
                <div className="selector">
                    <button className="itemx">X</button>
                    <button className="itemo">O</button>
                </div>
            </div>
        );
    }
}

export default Selector;
