import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../axiosInstance';
import { ACCOUNT_ENDPOINT } from '../../constants';

const initialState = {
  amount: 1,
}



export const fetchUserById = createAsyncThunk(
  'account/getUser',
  async (userId, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(`${ACCOUNT_ENDPOINT}/${userId}`);
      return data.amount;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);


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