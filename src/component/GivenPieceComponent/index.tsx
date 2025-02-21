

import { Piece } from "../../Model/Piece";
import PieceComponent from "../PieceComponent";

export default function GivenPieceComponent({piece, setGivenPiece}: {piece: Piece | null, setGivenPiece: (piece: Piece | null) => void}) {
    return (
        <div>
            <h1>Pièce selectionnée</h1>
            <div className="given-piece-container">
                {piece? <PieceComponent setGivenPiece={setGivenPiece}  piece={piece}/> : "Aucune pièce selectionnée"}
                
            </div>
        </div>
    )
}