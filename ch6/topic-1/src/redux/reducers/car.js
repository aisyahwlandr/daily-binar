import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
    cars: [],
};

// Define the slice
const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
    },
});

// export the setter funtion
export const { setCars } = carSlice.actions;

// export the reducer
export default carSlice.reducer;