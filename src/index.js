import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header.jsx';
import Board from './components/board.jsx';
import Selector from './components/selector.jsx';
import Notification from './components/notification.jsx'

class App extends React.Component {
    constructor(){
        super();
        this.handleSelection = this.handleSelection.bind(this);
        
        //enum for notification box options
        this.notification = {
            selectSymbol: <Selector handleSelection = {this.handleSelection}/>,
            yourturn: <Notification text = {"Your Turn!"}/>
        }

        this.state = {
            symbol: null,
            notification: this.notification.selectSymbol
        }
    }

    handleSelection(selection){
        this.setState({symbol: selection,
            notification: this.notification.yourturn});
    }

    render(){
        return (
            <div className="wrapper">
                <Header/>
                <Board/>
                {this.state.notification}
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
