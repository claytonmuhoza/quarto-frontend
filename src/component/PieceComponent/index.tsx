import { Piece } from '../../Model/Piece';
import './style.css';
export default function PieceComponent({piece, setGivenPiece}: {piece: Piece, setGivenPiece: (piece: Piece | null) => void}) {
    return (
        <div onClick={()=>setGivenPiece(piece)} className="piece-container">
            <img src={piece.getPieceImage()} alt={piece.getPieceString()} />
        </div>
    )
}