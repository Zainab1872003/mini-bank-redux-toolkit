import { createAction,createReducer } from "@reduxjs/toolkit"

const initialState = {
  points: 1,
}

export const increment = createAction('/reward/increment');
export const incrementbyAmount = createAction('/reward/incrementbyAmount');

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.points++
    })
    .addCase(incrementbyAmount,(state,action)=>{
      state.points+=action.payload;
    })
   
})

export default rewardReducer