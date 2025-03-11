import { Piece } from "../../Model/Piece";
import PieceComponent from "../PieceComponent";
import './style.css';

export default function CaseComponent({ piece, setGivenPiece }: { piece: Piece | null, setGivenPiece: (piece: Piece | null) => void }) {
    return (
        <div>
            {piece && <PieceComponent piece={piece} setGivenPiece={setGivenPiece} />}
        </div>
    );
}
