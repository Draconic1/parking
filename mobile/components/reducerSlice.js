import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "toolkit",
    initialState: {
        isLoading: true,
        parkings: [],
        apiBase: "http://ip_компа:8080/api",
    },
    reducers: {
        loadParkings(state, action) {
            state.parkings = action.payload;
        },
    },
});

export default slice.reducer;

export const { loadParkings } = slice.actions;
