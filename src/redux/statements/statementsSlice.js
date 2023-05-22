import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  incomeStatement: [],
  balanceSheet: [],
  cashFlow: [],
  isLoading: false,
  error: '',
};

const appId = '572cfdb4928f0508e54ff608861eeefb';

export const fetchIncomeData = createAsyncThunk('fetch/incomeData', async () => {
  try {
    const response = await axios.get(`https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=${appId}`);
    return response.data[0];
  } catch (error) {
    return error;
  }
});

const statementSlice = createSlice({
  name: 'statements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncomeData.fulfilled, (state, action) => {
        state.incomeStatement = action.payload;
      });
  },
});

export default statementSlice.reducer;
