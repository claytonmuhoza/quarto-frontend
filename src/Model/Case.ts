import { Piece } from "./Piece";

export class Case{
    private piece: Piece | null;
    constructor()
    {
        this.piece = null;
    }
    
    setPiece(piece:Piece | null)
    {
        if(piece)
        {
            this.piece = piece;
        }
    }
    
    getPiece()
    {
        return this.piece;
    }
    getstringPiece()
    {
        return this.piece?.getPieceString();
    }
    getName()
    {
        return this.piece?.getPieceString();
    }

}