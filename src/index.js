import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header.jsx';
import Board from './components/board.jsx';
import Selector from './components/selector.jsx';
import Notification from './components/notification.jsx';

class App extends React.Component {
    constructor(){
        super();
        this.handleSymbolSelection = this.handleSymbolSelection.bind(this);
        this.handleTileClick = this.handleTileClick.bind(this);
        
        //enum for notification box options
        this.notification = {
            selectSymbol: <Selector handleSymbolSelection = {this.handleSymbolSelection}/>,
            yourturn: <Notification text = {"Your Turn!"}/>
        }

        this.state = {
            playerSymbol: null,
            board: Array(9).fill(null),
            playersTurn: false,
            notification: this.notification.selectSymbol
        }
    }

    handleSymbolSelection(selection){
        this.setState({playerSymbol: selection});
        this.selectFirstPlayer();
    }

    handleTileClick(tile){
        console.log(tile);
        let temp = this.state.board;
        temp[tile] = this.state.playerSymbol;
        this.setState({board: temp});
        console.log(temp);
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
                <Board playerSymbol = {this.state.playerSymbol} board = {this.state.board} handleTileClick = {this.handleTileClick}/>
                {this.state.notification}
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
