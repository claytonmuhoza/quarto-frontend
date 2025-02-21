export class Piece{
    private _isLight:boolean;
    private _isHeight:boolean;
    private _isFull:boolean;
    private _isCircle:boolean;
    constructor({isLight,isHeight, isFull, isCircle}: {isLight: boolean, isHeight:boolean, isFull: boolean, isCircle: boolean})
    {
        this._isLight = isLight;
        this._isHeight = isHeight;
        this._isFull = isFull;
        this._isCircle = isCircle;
    }
    setLight(isLight: boolean)
    {
        this._isLight = isLight;
    }
    isLight()
    {
        return this._isLight;
    }
    setHeight(isHeight: boolean)
    {
        this._isHeight = isHeight;
    }
    isHeight()
    {
        return this._isHeight;
    }
    setFull(isFull:boolean)
    {
        this._isFull = isFull;
    }
    getFull()
    {
        return this._isFull;
    }
    setCircle(isCircle:boolean)
    {
        this._isCircle = isCircle;
    }
    getCircle()
    {
        return this._isCircle;
    }
    getPiece()
    {
        return this;
    }
    getPieceString()
    {
        return `${this._isCircle ? 'C' : 'R'}${this._isLight ? 'L' : 'D'}${this._isHeight ? 'H' : 'B'}${this._isFull ? 'F' : 'E'}`;
    }
   
    isSameType(piece:Piece)
    {
        return this.isLight() === piece.isLight() || this.isHeight() === piece.isHeight() || this.getFull() === piece.getFull() || this.getCircle() === piece.getCircle();
    } 
    getPieceImage()
    {
        return `/images/${this.getPieceString()}.png`;
    }

}