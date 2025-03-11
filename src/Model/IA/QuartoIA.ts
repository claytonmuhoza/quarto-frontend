import { Board } from "../Board";
import { Case } from "../Case";
import { Piece } from "../Piece";

export class QuartoAI {
    static evaluateBoard(board: Board): number {
        let score = 0;

        // Vérifier toutes les lignes, colonnes et diagonales
        const checkLines = (lines: Case[][]) => {
            for (let line of lines) {
                const linepieces = line.map(cell => cell.getPiece());
                const pieces = linepieces.filter(p => p !== null);
                if (pieces.length === 4) {
                    // Vérifier si une caractéristique est commune à toutes les pièces
                    const features = ["isLight", "isHeight", "isFull", "isCircle"];
                    for (let feature of features) {
                        if (pieces.every(p => (p as any)[feature] === true) || 
                            pieces.every(p => (p as any)[feature] === false)) {
                            score += 100; // Ligne gagnante
                        }

                    }
                }
            }
        };

        // Récupérer les lignes et colonnes du plateau
        checkLines(board.getBoard());
        checkLines(board.getBoard()[0].map((_, i) => board.getBoard().map(row => row[i])));

        // Vérifier les diagonales
        const diagonals = [
            [board.getCase(0, 0), board.getCase(1, 1), board.getCase(2, 2), board.getCase(3, 3)],
            [board.getCase(0, 3), board.getCase(1, 2), board.getCase(2, 1), board.getCase(3, 0)]
        ];
        checkLines(diagonals);

        return score;
    }

    static minimax(board: Board, depth: number, isMaximizing: boolean, alpha: number, beta: number): {score: number, move: [number, number] | null} {
        const score = QuartoAI.evaluateBoard(board);

        if (depth === 0 || Math.abs(score) >= 100) {
            return { score, move: null };
        }

        let bestMove: [number, number] | null = null;

        if (isMaximizing) {
            let maxEval = -Infinity;
            for (let x = 0; x < 4; x++) {
                for (let y = 0; y < 4; y++) {
                    if (!board.getCasePiece(x, y)) {
                        const newBoard = new Board();
                        Object.assign(newBoard, board);
                        newBoard.setCasePiece(x, y, new Piece({ isLight: true, isHeight: true, isFull: true, isCircle: true }));

                        const evalResult = QuartoAI.minimax(newBoard, depth - 1, false, alpha, beta);
                        if (evalResult.score > maxEval) {
                            maxEval = evalResult.score;
                            bestMove = [x, y];
                        }
                        alpha = Math.max(alpha, evalResult.score);
                        if (beta <= alpha) break;
                    }
                }
            }
            return { score: maxEval, move: bestMove };
        } else {
            let minEval = Infinity;
            for (let x = 0; x < 4; x++) {
                for (let y = 0; y < 4; y++) {
                    if (!board.getCasePiece(x, y)) {
                        const newBoard = new Board();
                        Object.assign(newBoard, board);
                        newBoard.setCasePiece(x, y, new Piece({ isLight: false, isHeight: false, isFull: false, isCircle: false }));

                        const evalResult = QuartoAI.minimax(newBoard, depth - 1, true, alpha, beta);
                        if (evalResult.score < minEval) {
                            minEval = evalResult.score;
                            bestMove = [x, y];
                        }
                        beta = Math.min(beta, evalResult.score);
                        if (beta <= alpha) break;
                    }
                }
            }
            return { score: minEval, move: bestMove };
        }
    }
}
