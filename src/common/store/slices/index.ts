import { combineReducers } from '@reduxjs/toolkit'
import mainSlice from './main'
import themeSlice from './theme'

export const rootReducer = combineReducers({
  mainSlice,
  themeSlice,
})
