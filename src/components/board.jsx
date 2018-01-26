import React from 'react';
import Tile from './tile.jsx';

let Board = (props) => {
    return (
        <div className="board">
            <Tile tile={0} board = {props.board} playerSymbol={props.playerSymbol} handleTileClick={(tile) => {props.handleTileClick(tile)}}/>
            <Tile tile={1} board = {props.board} playerSymbol={props.playerSymbol} handleTileClick={(tile) => {props.handleTileClick(tile)}}/>
            <Tile tile={2} board = {props.board} playerSymbol={props.playerSymbol} handleTileClick={(tile) => {props.handleTileClick(tile)}}/>
            <Tile tile={3} board = {props.board} playerSymbol={props.playerSymbol} handleTileClick={(tile) => {props.handleTileClick(tile)}}/>
            <Tile tile={4} board = {props.board} playerSymbol={props.playerSymbol} handleTileClick={(tile) => {props.handleTileClick(tile)}}/>
            <Tile tile={5} board = {props.board} playerSymbol={props.playerSymbol} handleTileClick={(tile) => {props.handleTileClick(tile)}}/>
            <Tile tile={6} board = {props.board} playerSymbol={props.playerSymbol} handleTileClick={(tile) => {props.handleTileClick(tile)}}/>
            <Tile tile={7} board = {props.board} playerSymbol={props.playerSymbol} handleTileClick={(tile) => {props.handleTileClick(tile)}}/>
            <Tile tile={8} board = {props.board} playerSymbol={props.playerSymbol} handleTileClick={(tile) => {props.handleTileClick(tile)}}/>
        </div>
    );
}

export default Board;
