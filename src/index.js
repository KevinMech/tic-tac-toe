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
        this.playersTurn = this.playersTurn.bind(this);
        this.computersTurn = this.computersTurn.bind(this);
        
        //enum for notification box options
        this.notification = {
            selectSymbol: <Selector handleSymbolSelection = {this.handleSymbolSelection}/>,
            yourturn: <Notification css = {"notifPlayer"} text = {"Your Turn!"}/>,
            computersturn: <Notification css = {"notifComputer"} text = {"Computers turn..."}/>
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
        if(this.state.playersTurn){
            let temp = this.state.board;
            temp[tile] = this.state.playerSymbol;
            this.setState({board: temp});
            this.computersTurn();
        }
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
        this.setState({playersTurn: false, 
            notification: this.notification.computersturn});
        let temp = this.state.board;
        let availablespace = [];
        for(let i = 0; i < temp.length; i++){
            if(this.state.board[i] === null) availablespace.push(i);
        }
        let rand = Math.floor(Math.random() * availablespace.length);
        let space = availablespace[rand];
        if(this.state.playerSymbol === 'X') temp[space] = 'O';
        else temp[space] = 'X';
        this.setState({board: temp});
        this.playersTurn();
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
