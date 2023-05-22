import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import IncomeStatement from './components/IncomeStatement';
import BalanceSheet from './components/BalanceSheet';
import Cashflow from './components/Cashflow';
import Equity from './components/Equity';

function App() {
  return (
    <div className="App">
      <Header />
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
