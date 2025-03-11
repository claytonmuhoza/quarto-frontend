import './style.css';
import PieceComponent from "../PieceComponent";
import { Bag } from '../../Model/Bag';
import { Piece } from '../../Model/Piece';

export default function BagComponent({ bagOfPiece, setGivenPiece }: { bagOfPiece: Bag, setGivenPiece: (piece: Piece | null) => void }) {
    return (
        <div className="bag-component">
            <h2>Pièces restantes à jouer</h2>
            <div className="bag-container">
                {bagOfPiece.pieces.length > 0 ? (
                    bagOfPiece.pieces.map((piece) => (
                        <PieceComponent setGivenPiece={setGivenPiece} key={piece.getPieceString()} piece={piece} />
                    ))
                ) : (
                    <p>Aucune pièce restante</p>
                )}
            </div>
        </div>
    );
}
