import { Board } from "../../Model/Board";
import { Case } from "../../Model/Case";
import { Piece } from "../../Model/Piece";
import CaseComponent from "../CaseComponent";
import "./style.css";
export default function BoardComponent({givenPiece, boardData, setGivenPiece, setBoard}: {givenPiece:Piece | null,boardData: Board,setBoard: (board:Board)=>void, setGivenPiece: (piece: Piece | null) => void}) {
    const setCasePiece = (cell: Case, piece: Piece | null) => {
        if(piece) {
            const copyBoard: Board = new Board();
            Object.assign(copyBoard, boardData);
            cell.setPiece(piece)
            setGivenPiece(null);
            setBoard(copyBoard);
        }
    }
    return (
        <div className="Board-container">
        <div className="central-circle-container">
            {boardData.getBoard().map((row, i) => {
                return (
                    <div className="line-container" key={i}>
                        {row.map((cell, j) => {
                            return (
                                <div onClick={() => setCasePiece(cell, givenPiece)} className="case-container" key={j}>
                                    <CaseComponent piece={boardData.getCasePiece(i,j)} setGivenPiece={setGivenPiece}/>
                                </div>
                            )
                        })}
                    </div>
                )
            }
            )}
        </div>
    </div>

    )
}
    /*
export default function BoardComponent({bordData}: {bordData: Board}) {
    return (
        <div className="board-main-container">
            plateau de jeux
            <div className="board-container">
                {bordData.getBoard().map((row, i) => {
                    return (
                        <div className="board-line" key={i}>
                            {row.map((cell, j) => {
                                return (
                                    <div className="board-case" key={j}>

                                        0 {cell ? cell.getName() : ""}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}*/