import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Homepage from './components/Homepage';
import IncomeStatement from './components/IncomeStatement';
import BalanceSheet from './components/BalanceSheet';
import Cashflow from './components/Cashflow';
import Equity from './components/Equity';
import { fetchIncomeData, fetchBalanceData, fetchCashData } from './redux/statements/statementsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchIncomeData());
    // dispatch(fetchBalanceData());
    dispatch(fetchCashData());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/income-statement" element={<IncomeStatement />} />
        <Route path="/balance-sheet" element={<BalanceSheet />} />
        <Route path="/cash-flow" element={<Cashflow />} />
        <Route path="/equity" element={<Equity />} />
      </Routes>
    </div>
  );
}

export default App;
