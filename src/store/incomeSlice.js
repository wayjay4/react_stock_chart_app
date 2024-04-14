import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const incomeSlice = createSlice({
    name: 'income',
    initialState,
    reducers: {
        setIncome(state, action){
            return [action.payload];
        },
    }
});

export const { setIncome } = incomeSlice.actions;
export default incomeSlice.reducer; // this will give the state