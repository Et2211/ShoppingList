import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import shoppingList from './../shoppingList' 

const initialState = {
  value: 0 
}


const setSpendingBudget = (state, action) => {
  state.value = action.payload
}


export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    setBudget: setSpendingBudget,

  }, 
})

export const { setBudget } = budgetSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const budget = (state) => state.budget

export default budgetSlice.reducer