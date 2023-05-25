import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Homepage from './components/Homepage';
import { fetchIncomeData, fetchBalanceData, fetchCashData } from './redux/statements/statementsSlice';
import DetailsPage from './components/DetailsPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIncomeData());
    dispatch(fetchBalanceData());
    dispatch(fetchCashData());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/statement/:details" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
