import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './slices/accountSlice'
import bonusReducer from './slices/bonusSlice'
import {Provider} from 'react-redux'



const store = configureStore({
  reducer:{
    account:accountReducer,
    bonus:bonusReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
