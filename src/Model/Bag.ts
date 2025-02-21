import { Piece } from "./Piece";

export class Bag{
    private _pieces: Piece[];
    constructor()
    {
        //generer les 16 pieces
        this._pieces = [new Piece({isLight: true, isHeight: true, isFull: true, isCircle: true}),
                        new Piece({isLight: true, isHeight: true, isFull: true, isCircle: false}),
                        new Piece({isLight: true, isHeight: true, isFull: false, isCircle: true}),
                        new Piece({isLight: true, isHeight: true, isFull: false, isCircle: false}),
                        new Piece({isLight: true, isHeight: false, isFull: true, isCircle: true}),
                        new Piece({isLight: true, isHeight: false, isFull: true, isCircle: false}),
                        new Piece({isLight: true, isHeight: false, isFull: false, isCircle: true}),
                        new Piece({isLight: true, isHeight: false, isFull: false, isCircle: false}),
                        new Piece({isLight: false, isHeight: true, isFull: true, isCircle: true}),
                        new Piece({isLight: false, isHeight: true, isFull: true, isCircle: false}),
                        new Piece({isLight: false, isHeight: true, isFull: false, isCircle: true}),
                        new Piece({isLight: false, isHeight: true, isFull: false, isCircle: false}),
                        new Piece({isLight: false, isHeight: false, isFull: true, isCircle: true}),
                        new Piece({isLight: false, isHeight: false, isFull: true, isCircle: false}),
                        new Piece({isLight: false, isHeight: false, isFull: false, isCircle: true}),
                        new Piece({isLight: false, isHeight: false, isFull: false, isCircle: false})];  

    }
    get pieces()
    {
        return this._pieces;
    }
    removePiece(piece:Piece)
    {
        this._pieces = this._pieces.filter(p => p.getPieceString() !== piece.getPieceString());
    }
   
    removeAndReturnPiece(piece:Piece)
    {
        const copy = {...this._pieces};
        //remove the piece from the bag
        this._pieces = this._pieces.filter(p => p.getPieceString() !== piece.getPieceString());
        return copy;
    }
}