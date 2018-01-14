import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header.jsx';
import Board from './components/board.jsx';

const App = () => {
	return (
        <div>
            <Header/>
            <Board/>
        </div>
        );
}

ReactDom.render(<App/>, document.getElementById('root'));