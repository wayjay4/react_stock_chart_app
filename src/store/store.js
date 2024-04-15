import {configureStore} from "@reduxjs/toolkit";
import incomeSlice from "./incomeSlice";
import balanceSlice from "./balanceSlice";
import stockSlice from "./stockSlice";

const store = configureStore({
    reducer: {
        'income': incomeSlice,
        'balance': balanceSlice,
        'stock': stockSlice,
    }
})

export default store