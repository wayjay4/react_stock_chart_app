import {createSlice} from "@reduxjs/toolkit";

const initialState = {};

const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        setBalance(state, action){
            // reverse the needed reports before saving to state as the data comes as descending order
            if (action.payload['annualReports']) {
                action.payload['annualReports'].reverse();
            }
            if (action.payload['quarterlyReports']) {
                action.payload['quarterlyReports'].reverse();
            }
            return action.payload;
        },
        clearBalance(){
            return initialState;
        }
    }
});

export const { setBalance, clearBalance } = balanceSlice.actions;
export default balanceSlice.reducer; // this will give the state