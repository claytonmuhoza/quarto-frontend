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
        this.board = [...board];
    }
    getCase(x:number, y:number)
    {
        return this.board[x][y];
    }
    setCase(x:number, y:number, newCase:Case)
    {
        this.board[x][y] = newCase;
    }
    getCasePiece(x:number, y:number)
    {
        return this.board[x][y].getPiece();
    }
    setCasePiece(x: number, y: number, piece: Piece) {
        // Clone du plateau pour éviter de modifier l'ancien état directement
        const newBoard: Case[][] = this.board.map(row => row.map(cell => {
            const newCell = new Case();
            newCell.setPiece(cell.getPiece());
            return newCell;
        }));
    
        // Mise à jour de la case spécifique
        newBoard[x][y].setPiece(piece);
    
        // Remplacement du plateau par la nouvelle version
        this.board = newBoard;
    }
   
}