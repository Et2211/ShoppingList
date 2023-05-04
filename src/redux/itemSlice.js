import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import shoppingList from './../shoppingList' 

const initialState = shoppingList
const addItemToArray = (state, action) => {
  state.push(action.payload)
}

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: addItemToArray,
  }, 
})

export const { addItem, removeItem, checkItem } = itemSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state) => state.score

export default itemSlice.reducer