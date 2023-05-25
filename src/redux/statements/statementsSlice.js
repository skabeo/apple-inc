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

export const fetchBalanceData = createAsyncThunk('fetch/BalanceData', async () => {
  try {
    const response = await axios.get(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/AAPL?limit=120&apikey=${appId}`);
    return response.data[0];
  } catch (error) {
    return error;
  }
});

export const fetchCashData = createAsyncThunk('fetch/CashData', async () => {
  try {
    const response = await axios.get(`https://financialmodelingprep.com/api/v3/cash-flow-statement/AAPL?limit=120&apikey=${appId}`);
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
      .addCase(fetchIncomeData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIncomeData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.incomeStatement = action.payload;
      })
      .addCase(fetchBalanceData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBalanceData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.balanceSheet = action.payload;
      })
      .addCase(fetchCashData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCashData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cashFlow = action.payload;
      });
  },
});

export default statementSlice.reducer;
