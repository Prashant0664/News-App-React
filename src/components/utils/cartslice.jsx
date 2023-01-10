import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartState: false,
    title:'',
    imgl:'',
    content:'',
  }

  const CartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
  
        setOpenCart: (state, action) => {
            // console.log(state.cartState,action.payload,action.payload.CartState)
            state.cartState = action.payload.cartState
            state.title = action.payload.title
            state.imgl = action.payload.imgl
            state.content = action.payload.content
          },
           setCloseCart: (state, action) => {
            // console.log(state.cartState,action.payload,action.payload.CartState)
            state.cartState = false
            state.title = ''
            state.imgl = ''
            state.content = ''
          }, 
}
});

export const { setOpenCart , setCloseCart } = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState
export const stitle = (state) => state.cart.title
export const simgl = (state) => state.cart.imgl
export const scontent = (state) => state.cart.content

export default CartSlice.reducer;
