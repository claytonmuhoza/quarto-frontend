import { Piece } from "./Piece";

export class GivenPiece{
    private piece: Piece | null;
    constructor({piece =null}: {piece: Piece | null})
    {
        this.piece = piece;
    }
    setPiece(piece:Piece)
    {
        if(piece)
        {
            this.piece = piece;
        }
    }
    getAndRemovePiece()
    {
        const piece = this.piece;
        this.piece = null;
        return piece;
    }
}