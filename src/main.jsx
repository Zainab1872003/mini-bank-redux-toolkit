import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './slices/accountSlice'
import bonusReducer from './slices/bonusSlice'
import {Provider} from 'react-redux'
import rewardReducer from './reducers/reward'



const store = configureStore({
  reducer:{
    account:accountReducer,
    bonus:bonusReducer,
    reward:rewardReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
