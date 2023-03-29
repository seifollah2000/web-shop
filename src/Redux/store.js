import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./Input/InputSlice";

const store = configureStore({
    reducer: {
        input: inputReducer
    }
})

export default store