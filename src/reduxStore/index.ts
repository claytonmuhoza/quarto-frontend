// import {createSlice, configurationStore} from '@reduxjs/toolkit';
// import { Board } from '../Model/Board';
// import { Bag } from '../Model/Bag';

// const BoardSlice = createSlice({
//     name: 'board',
//     initialState: {
//         board: new Board()
//     },
//     reducers: {
//         setBoard: (state: any, action: any) => {
//             state.board = action.payload;
//         }
//     }
// });
// const BagSlice = createSlice({
//     name: 'bag',
//     initialState: {
//         bag: new Bag()
//     },
//     reducers: {
//         setBag: (state: any, action: any) => {
//             state.bag = action.payload;
//         }
//     }
// });
// const GivenPieceSlice = createSlice({
//     name: 'givenPiece',
//     initialState: {
//         givenPiece: null
//     },
//     reducers: {
//         setGivenPiece: (state: any, action: any) => {
//             state.givenPiece = action.payload;
//         }
//     }
// });
// export const {setBoard} = BoardSlice.actions;
// const store = configurationStore({
//     reducer: {
//         board: BoardSlice.reducer
//     }
// });
// export default store;