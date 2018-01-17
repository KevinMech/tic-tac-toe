import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header.jsx';
import Board from './components/board.jsx';
import Selector from './components/selector.jsx';

class App extends React.Component {
    constructor(){
        super();

        this.handleSelection = this.handleSelection.bind(this);

        this.state = {
            selector: <Selector handleSelection = {this.handleSelection}/>,
            symbol: null
        }
    }

    handleSelection(symbol){

    }

    render(){
        return (
            <div className="wrapper">
                <Header/>
                <Board/>
                {this.state.selector}
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
