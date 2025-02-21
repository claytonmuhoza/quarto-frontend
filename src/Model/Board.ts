import { Case } from "./Case";
import { Piece } from "./Piece";

export class Board{
    private board: Case[][];
    constructor()
    {
        const line1: Case[] = [new Case(), new Case(), new Case(), new Case()];
        const line2: Case[] = [new Case(), new Case(), new Case(), new Case()];
        const line3: Case[] = [new Case(), new Case(), new Case(), new Case()];
        const line4: Case[] = [new Case(), new Case(), new Case(), new Case()];
        this.board = [line1, line2, line3, line4];
    }
    getBoard()
    {
        return this.board;
    }
    setBoard(board:Case[][])
    {
        this.board = board;
    }
    getCase(x:number, y:number)
    {
        return this.board[x][y];
    }
    setCase(x:number, y:number, piece:Case)
    {
        this.board[x][y] = piece;
    }
    getCasePiece(x:number, y:number)
    {
        return this.board[x][y].getPiece();
    }
    setCasePiece(x:number, y:number, piece:Piece)
    {
        this.board[x][y].setPiece(piece);
    }
}