import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import shoppingList from './../shoppingList' 

const initialState = shoppingList


const addItemToArray = (state, action) => {
  state.push(action.payload)
}

const removeItemFromArray = (state, action) => {
  state.splice(action.payload, 1)
}

const checkItemOnList = (state, action) => {
  state[action.payload].gotIt = !state[action.payload].gotIt
}

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: addItemToArray,
    removeItem: removeItemFromArray,
    checkItem: checkItemOnList
  }, 
})

export const { addItem, removeItem, checkItem } = itemSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state) => state.score

export default itemSlice.reducer