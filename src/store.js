import { configureStore } from '@reduxjs/toolkit'
import shopsReducer from './features/shops/shops.dataSlice'

export default configureStore({
  reducer: {
    delivery: shopsReducer,
    status: 'idle',
    error: null
  },
})