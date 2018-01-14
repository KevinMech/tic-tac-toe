import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header.jsx'; 

const App = () => {
	return <Header/>;
}

ReactDom.render(<App/>, document.getElementById('root'));