import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header.jsx';
import Board from './components/board.jsx';
import Selector from './components/selector.jsx';

const App = () => {
	return (
        <div className="wrapper">
            <Header/>
            <Board/>
            <Selector/>
        </div>
        );
}

ReactDom.render(<App/>, document.getElementById('root'));
