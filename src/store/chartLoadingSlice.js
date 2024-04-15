import {createSlice} from "@reduxjs/toolkit";

const initialState = false;

const chartLoadingSlice = createSlice({
    name: 'chartLoading',
    initialState,
    reducers: {
        setChartLoading: (state, action) => {
            return action.payload;
        }
    }
})

export const { setChartLoading } = chartLoadingSlice.actions;
export default chartLoadingSlice.reducer;