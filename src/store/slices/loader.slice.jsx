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


// admin/host/search/{search}
// 'nombre', 'razon_social','email','rfc'
// yael.hernandez@disc.com.mx