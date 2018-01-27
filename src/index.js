import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header.jsx';
import Board from './components/board.jsx';
import Selector from './components/selector.jsx';
import Notification from './components/notification.jsx';

const symbol = {
    X: 'X',
    O: 'O'
}

class App extends React.Component {

    constructor(){
        super();
        this.handleSymbolSelection = this.handleSymbolSelection.bind(this);
        this.handleTileClick = this.handleTileClick.bind(this);
        this.playersTurn = this.playersTurn.bind(this);
        this.computersTurn = this.computersTurn.bind(this);
        
        //enum for notification box options
        this.notification = {
            selectSymbol: <Selector handleSymbolSelection = {this.handleSymbolSelection} symbols ={symbol}/>,
            yourturn: <Notification css = {"notifPlayer"} text = {"Your Turn!"}/>,
            computersturn: <Notification css = {"notifComputer"} text = {"Computers turn..."}/>
        }

        this.state = {
            playerSymbol: null,
            computerSymbol: null,
            board: Array(9).fill(null),
            playersTurn: false,
            notification: this.notification.selectSymbol
        }
    }

    handleSymbolSelection(selection){
        if(selection === symbol.X){
            this.setState({playerSymbol: selection,
                computerSymbol: symbol.O}, this.selectFirstPlayer);
        }
        else this.setState({playerSymbol: selection,
                computerSymbol: symbol.X}, this.selectFirstPlayer);
    }

    handleTileClick(tile){
        if(this.state.playersTurn){
            let temp = this.state.board;
            temp[tile] = this.state.playerSymbol;
            this.setState({board: temp});
            this.computersTurn();
            this.victoryCondition();
        }
    }

    selectFirstPlayer(){
        let selection = Math.round(Math.random());
        if(selection === 0) this.playersTurn();
        else this.computersTurn();
    }

    playersTurn(){
        console.log('players turn');
        this.setState({playersTurn: true, 
            notification: this.notification.yourturn});
    }

    computersTurn(){
        console.log('computers turn');
        this.setState({playersTurn: false, 
            notification: this.notification.computersturn});
        let temp = this.state.board;
        let availablespace = [];
        for(let i = 0; i < temp.length; i++){
            if(this.state.board[i] === null) availablespace.push(i);
        }
        let rand = Math.floor(Math.random() * availablespace.length);
        let space = availablespace[rand];
        temp[space] = this.state.computerSymbol;
        this.setState({board: temp});
        this.victoryCondition();
        this.playersTurn();
    }

    victoryCondition(){
        let board = this.state.board;

        //check each row for victory condition
        for(let i = 0; i < 3; i+=3){
            if(this.state.board[i] === this.state.playerSymbol && this.state.board[i+1] === this.state.playerSymbol && this.state.board[i+2] === this.state.playerSymbol){
                console.log('row win');
            }
            else if(this.state.board[i] === this.state.computerSymbol && this.state.board[i+1] === this.state.computerSymbol && this.state.board[i+2] === this.state.computerSymbol){
                console.log('row lost');
            }
        }

        //check each column for victory condition
        for(let i = 0; i < 3; i++){
            if(this.state.board[i] === this.state.playerSymbol && this.state.board[i+3] === this.state.playerSymbol && this.state.board[i+6] === this.state.playerSymbol){
                console.log('column win');
            }
            if(this.state.board[i] === this.state.computerSymbol && this.state.board[i+3] === this.state.computerSymbol && this.state.board[i+6] === this.state.computerSymbol){
                console.log('column lose');
            }
        }

        //Check Diagnols for victory condition
        if(this.state.board[0] === this.state.playerSymbol && this.state.board[4] === this.state.playerSymbol && this.state.board[8] === this.state.playerSymbol){
            console.log('diagnol win');
        }
        else if(this.state.board[0] === this.state.computerSymbol && this.state.board[4] === this.state.computerSymbol && this.state.board[8] === this.state.computerSymbol){
            console.log('diagnol lose');
        }

        //Check Diagnols for victory condition
        if(this.state.board[2] === this.state.playerSymbol && this.state.board[4] === this.state.playerSymbol && this.state.board[6] === this.state.playerSymbol){
            console.log('diagnol win');
        }
        else if(this.state.board[2] === this.state.computerSymbol && this.state.board[4] === this.state.computerSymbol && this.state.board[6] === this.state.computerSymbol){
            console.log('diagnol lose');
        }
    }

    gameOver(win, draw){
        
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
