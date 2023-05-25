import React from 'react';
import { useParams } from 'react-router-dom';
import IncomeStatement from './IncomeStatement';
import BalanceSheet from './BalanceSheet';
import Cashflow from './Cashflow';
import Equity from './Equity';

const DetailsPage = () => {
  const { details } = useParams();

  const componentMap = {
    'income-statement': <IncomeStatement />,
    'balance-sheet': <BalanceSheet />,
    'cash-flow': <Cashflow />,
    equity: <Equity />,
  };

  const selectedComponent = componentMap[details];

  return <div>{selectedComponent}</div>;
};

export default DetailsPage;
