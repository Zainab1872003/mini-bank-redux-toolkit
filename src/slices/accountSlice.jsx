import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  amount: 1,
}

export const fetchUserById = createAsyncThunk(
  'account/getUser',
  async (userId, thunkAPI) => {
    const {data} = await axios.get(`http://localhost:8080/accounts/${userId}`);
    return data.amount;
  },
)

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += +action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.amount += action.payload;
    })
  }
})

export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer