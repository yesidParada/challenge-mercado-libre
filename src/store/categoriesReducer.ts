import { createSlice } from '@reduxjs/toolkit'

export const categoriesReducer = createSlice({
  name: 'counter',
  initialState: {
    categories: [],
  },
  reducers: {
    addCategories: (state: any,action:any) => {
      state.categories = [...action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCategories } = categoriesReducer.actions

export default categoriesReducer.reducer