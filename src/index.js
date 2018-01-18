import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header.jsx';
import Board from './components/board.jsx';
import Selector from './components/selector.jsx';
import Notification from './components/notification.jsx';

class App extends React.Component {
    constructor(){
        super();
        this.handleSelection = this.handleSelection.bind(this);
        this.handleTileClick = this.handleTileClick.bind(this);
        
        //enum for notification box options
        this.notification = {
            selectSymbol: <Selector handleSelection = {this.handleSelection}/>,
            yourturn: <Notification text = {"Your Turn!"}/>
        }

        this.state = {
            symbol: null,
            playersTurn: false,
            notification: this.notification.selectSymbol
        }
    }

    handleSelection(selection){
        this.setState({symbol: selection});
        this.selectFirstPlayer();
    }

    handleTileClick(tile){
        console.log('hello');
    }

    selectFirstPlayer(){
        let selection = Math.round(Math.random());
        if(selection === 0) this.playersTurn();
        else this.computersTurn();
    }

    playersTurn(){
        this.setState({playersTurn: true,
            notification: this.notification.yourturn});
    }

    computersTurn(){
        console.log('computer');
    }

    render(){
        return (
            <div className="wrapper">
                <Header/>
                <Board handleTileClick = {this.handleTileClick}/>
                {this.state.notification}
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
