import {createSlice} from "@reduxjs/toolkit";

const initialState = {};

const incomeSlice = createSlice({
    name: 'income',
    initialState,
    reducers: {
        setIncome(state, action){
            // reverse the needed reports before saving to state as the data comes as descending order
            if (action.payload['annualReports']) {
                action.payload['annualReports'].reverse();
            }
            if (action.payload['quarterlyReports']) {
                action.payload['quarterlyReports'].reverse();
            }

            return action.payload;
        },
        clearIncome(){
            return initialState;
        }
    }
});

export const { setIncome, clearIncome} = incomeSlice.actions;
export default incomeSlice.reducer; // this will give the state