import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }

            state.quantity += 1;
            state.total += item.price;
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.quantity += 1;
                state.total += item.price;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.quantity -= 1;
                state.total -= item.price;
            }
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const item = state.items.find((i) => i.id === itemId);
            if (item) {
                state.items = state.items.filter((i) => i.id !== itemId);
                state.quantity -= item.quantity;
                state.total -= item.price * item.quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.quantity = 0;
            state.total = 0;
        },
        addToWishList:(state,action)=>{
            const item = action.payload;
            state.items.push(item);
        },
        removeFromWishList:(state,action)=>{
            const itemId = action.payload;
            const item = state.items.find((i) => i.id === itemId);
            if (item) {
                state.items = state.items.filter((i) => i.id !== itemId);
            }

        }
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, 
    addToWishList, removeFromWishList, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
