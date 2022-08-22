import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userId",
    initialState: {
        value: '',
    },
    reducers: {
        set_userId: (state, action) => {
            state.value = action.payload;
        },
    },
});
  
// categorySlice.actions 

export const { set_userId } = userSlice.actions;
export default userSlice.reducer;