
import './style.css';
import PieceComponent from "../PieceComponent";
import { Bag } from '../../Model/Bag';
import { Piece } from '../../Model/Piece';
export default function BagComponent({bagOfPiece, setGivenPiece}: {bagOfPiece: Bag, setGivenPiece: (piece: Piece | null) => void}) {
    return (
        <div>
            <h2>Pièces restant à jouer</h2>
            <div className="bag-container">
                {bagOfPiece.pieces.map((piece, index) => <PieceComponent setGivenPiece={setGivenPiece} key={index} piece={piece}/>)}
            </div>
        </div>
        
    )
}