import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        setBalance(state, action){
            return [action.payload];
        },
    }
});

export const { setBalance } = balanceSlice.actions;
export default balanceSlice.reducer; // this will give the state