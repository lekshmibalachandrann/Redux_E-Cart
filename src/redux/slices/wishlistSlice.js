import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        //to add items to the state
        addWishlistItems : (state,action)=>{
            state.push(action.payload)
        },
        removeWishlistItem : (state,action)=>{
            return state.filter((item)=>item.id != action.payload)
        }

    }
})

export const {addWishlistItems, removeWishlistItem} = wishlistSlice.actions

export default wishlistSlice.reducer