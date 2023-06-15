import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: false,
    reducers: {
        setIsLoading: (state,action) => {
            return action.payload
        }
    }
})

export const { setIsLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
