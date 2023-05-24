import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import IncomeStatement from '../components/IncomeStatement';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('IncomeStatement', () => {
  it('should render the IncomeStatement component correctly', () => {
    const mockData = {
      revenue: 1000000,
      costOfRevenue: 500000,
      grossProfit: 500000,
      interestIncome: 20000,
      interestExpense: 10000,
      operatingExpenses: 30000,
      costAndExpenses: 530000,
      depreciationAndAmortization: 5000,
      operatingIncome: 470000,
      incomeBeforeTax: 450000,
      incomeTaxExpense: 150000,
      netIncome: 300000,
    };

    const mockFilteredData = [
      ['revenue', 1000000],
      ['grossProfit', 500000],
      ['operatingIncome', 470000],
    ];

    useSelector.mockImplementation((selectorFn) => selectorFn({
      data: {
        incomeStatement: mockData,
      },
    }));

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <IncomeStatement />
      </MemoryRouter>
    );

    expect(getByText('Apple Inc')).toBeInTheDocument();
    expect(getByText('Income Statement')).toBeInTheDocument();
    expect(getByText('Year Ended December 31')).toBeInTheDocument();
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
