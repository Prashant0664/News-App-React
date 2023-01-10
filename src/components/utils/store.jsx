import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartslice.jsx";
const Store=configureStore({
    reducer:{
        cart:CartSlice,
    }
});
export default Store; 