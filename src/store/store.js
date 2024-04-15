import {configureStore} from "@reduxjs/toolkit";
import incomeSlice from "./incomeSlice";
import balanceSlice from "./balanceSlice";
import stockSlice from "./stockSlice";
import chartLoadingSlice from "./chartLoadingSlice";

const store = configureStore({
    reducer: {
        'income': incomeSlice,
        'balance': balanceSlice,
        'stock': stockSlice,
        'chartLoading': chartLoadingSlice,
    }
})

export default store