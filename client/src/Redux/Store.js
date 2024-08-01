import {configureStore} from "@reduxjs/toolkit";
import cartSlices from "./Slices/cartSlices";


export const store = configureStore({
    reducer: {
        cart: cartSlices
    }
})


