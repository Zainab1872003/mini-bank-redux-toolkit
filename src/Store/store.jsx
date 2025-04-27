import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '../slices/accountSlice'
import bonusReducer from '../slices/bonusSlice'
import rewardReducer from '../reducers/reward'



const store = configureStore({
  reducer:{
    account:accountReducer,
    bonus:bonusReducer,
    reward:rewardReducer
  }
})

export default store;