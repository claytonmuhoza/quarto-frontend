import { Board } from "../../Model/Board";
import { Piece } from "../../Model/Piece";
import CaseComponent from "../CaseComponent";
import "./style.css";
export default function BoardComponent({boardData, setGivenPiece, setBoard}: {boardData: Board,setBoard: (piece:Piece | null)=>void, setGivenPiece: (piece: Piece | null) => void}) {
   
    return (
        <div className="Board-container">
        <div className="central-circle-container">
            {boardData.getBoard().map((row, i) => {
                return (
                    <div className="line-container" key={i}>
                        {row.map((cell, j) => {
                            return (
                                <div onClick={() => cell.setPiece(givenPiece)} className="case-container" key={j}>
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