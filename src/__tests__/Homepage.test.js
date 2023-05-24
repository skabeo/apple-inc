import React from 'react';
import { render, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Homepage from '../components/Homepage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Homepage', () => {
  it('should render the homepage with the correct data', () => {
    const mockIncomeStatement = {
      calendarYear: 2022,
      revenue: 1000000,
    };

    const mockBalanceSheet = {
      totalAssets: 2000000,
      commonStock: 500000,
    };

    const mockCashFlow = {
      netIncome: 300000,
    };

    useSelector.mockImplementation((selectorFn) => selectorFn({
      data: {
        incomeStatement: mockIncomeStatement,
        balanceSheet: mockBalanceSheet,
        cashFlow: mockCashFlow,
      },
    }));

    const { container } = render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    );

    expect(getByText(container, 'Apple')).toBeInTheDocument();
    expect(getByText(container, 'Inc')).toBeInTheDocument();
    expect(getByText(container, '2022 calender year')).toBeInTheDocument();
  });
});
