import React from 'react';

const pieces = [
  { id: 1, height: 'short', shape: 'round', color: 'light', filled: true },
  { id: 2, height: 'short', shape: 'round', color: 'light', filled: false },
  { id: 3, height: 'short', shape: 'round', color: 'dark', filled: true },
  { id: 4, height: 'short', shape: 'round', color: 'dark', filled: false },
  { id: 5, height: 'short', shape: 'square', color: 'light', filled: true },
  { id: 6, height: 'short', shape: 'square', color: 'light', filled: false },
  { id: 7, height: 'short', shape: 'square', color: 'dark', filled: true },
  { id: 8, height: 'short', shape: 'square', color: 'dark', filled: false },
  { id: 9, height: 'tall', shape: 'round', color: 'light', filled: true },
  { id: 10, height: 'tall', shape: 'round', color: 'light', filled: false },
  { id: 11, height: 'tall', shape: 'round', color: 'dark', filled: true },
  { id: 12, height: 'tall', shape: 'round', color: 'dark', filled: false },
  { id: 13, height: 'tall', shape: 'square', color: 'light', filled: true },
  { id: 14, height: 'tall', shape: 'square', color: 'light', filled: false },
  { id: 15, height: 'tall', shape: 'square', color: 'dark', filled: true },
  { id: 16, height: 'tall', shape: 'square', color: 'dark', filled: false }
];

const PieceRender = ({ height, shape, color, filled }: {height: string, shape: string, color:string, filled: boolean}) => {
  const bgColor = color === 'light' ? 'bg-gray-300' : 'bg-gray-800';
  const borderColor = color === 'light' ? 'border-gray-500' : 'border-gray-900';
  const isTall = height === 'tall' ? 'h-24' : 'h-12';
  const isRound = shape === 'round' ? 'rounded-full' : '';
  const isFilled = filled ? bgColor : 'bg-transparent';

  return (
    <div className={`w-12 ${isTall} ${isRound} ${isFilled} border-4 ${borderColor} flex items-center justify-center m-2`}></div>
  );
};

const PiecesQuarto = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {pieces.map(piece => (
        <PieceRender key={piece.id} {...piece} />
      ))}
    </div>
  );
};

export default PiecesQuarto;
