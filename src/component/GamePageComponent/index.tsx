import {  useState } from "react";
import BagComponent from "../BagComponent";
import BoardComponent from "../BoardComponent";
import GivenPieceComponent from "../GivenPieceComponent";
import MenuComponent from "../MenuComponent";
// import PiecesQuarto from "../PiecesQuarto";
import './style.css';
import { Piece } from "../../Model/Piece";
import { Bag } from "../../Model/Bag";
import { Board } from "../../Model/Board";
export default function GamePageComponent() {
    let [bag, setBag] = useState<Bag>(new Bag());
    let [board, setBoard] = useState<Board>(new Board());
    let [givenPiece, setGivenPiece] = useState<Piece|null>(null);
    
    
    const setBoardFunction = ( board: Board ) => {
        setBoard(board);
    }
    // select a piece from the bag
    const setGivenPieceFunction = (piece: Piece | null) => {
        if(!givenPiece) {
            setGivenPiece(piece);
            if(piece)
            {
               //copy the bag
                const copyBag: Bag = new Bag();
                Object.assign(copyBag, bag);
                copyBag.removePiece(piece);
                setBag(copyBag);
            }
        }
        else
        {
            if(piece==null)
            {
                setGivenPiece(null);
            }
        }
        
    }
    return (
        <div>
            {/* <PiecesQuarto/> */}
            <MenuComponent/>
            <div className="game-page-container">
                <BoardComponent givenPiece={givenPiece} setBoard={setBoardFunction} boardData={board} setGivenPiece={setGivenPieceFunction}/>
                <GivenPieceComponent piece={givenPiece} setGivenPiece={setGivenPieceFunction}/>
                <BagComponent bagOfPiece={bag} setGivenPiece={setGivenPieceFunction}/>
                
            </div>
        </div>
    )
}