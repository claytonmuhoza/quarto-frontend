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
import { QuartoAI } from "../../Model/IA/QuartoIA";
export default function GamePageComponent() {
    // const [isPlayerTours, setIsPlayerTours] = useState<boolean>(true); 
    //the bag that contain all piece to play
    const [bag, setBag] = useState<Bag>(new Bag());
    //the board where we put piece played
    const [board, setBoard] = useState<Board>(new Board());
    //piece that is selected by player to be played by the other player
    const [givenPiece, setGivenPiece] = useState<Piece|null>(null);
    
    
    const setBoardFunction = ( board: Board ) => {
        setBoard(board);
    }
    const setGivenPieceFunction = (piece: Piece | null) => {
        if (!givenPiece) {
            setGivenPiece(piece);
            if (piece) {
                const copyBag = new Bag();
                Object.assign(copyBag, bag);
                copyBag.removePiece(piece);
                setBag(copyBag);
    
                // Lancer l'IA si c'est son tour
                setTimeout(() => playAI(piece), 500);
            }
        } else if (piece == null) {
            setGivenPiece(null);
        }
    };
    const playAI = (piece:Piece) => {
        if (piece) {
            const { move } = QuartoAI.minimax(board, 3, true, -Infinity, Infinity);
            const copyBoard = new Board();
            copyBoard.setBoard(board.getBoard());
            if (move) {
                const [x, y] = move;
                copyBoard.setCasePiece(x, y, piece);
                setGivenPiece(null);
                setBoard(copyBoard);
            }
        }
    };
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