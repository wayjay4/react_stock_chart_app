import {configureStore} from "@reduxjs/toolkit";
import incomeSlice from "./incomeSlice";
import balanceSlice from "./balanceSlice";

const store = configureStore({
    reducer: {
        'income': incomeSlice,
        'balance': balanceSlice,
    }
})

export default store