import { createSlice } from "@reduxjs/toolkit";

export const markedSlice = createSlice({
    name: "marked",
    initialState: {
        value: {},
    },
    reducers: {
        set_marked: (state, action) => {
            state.value = action.payload;
        },
    },
});
  
// categorySlice.actions 

export const { set_marked } = markedSlice.actions;
export default markedSlice.reducer;