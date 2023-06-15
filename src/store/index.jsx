import { configureStore } from '@reduxjs/toolkit'
import loaderSlice from './slices/loader.slice'

export default configureStore({
  reducer: {
        loader: loaderSlice
	}
})