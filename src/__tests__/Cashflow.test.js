import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Cashflow from '../components/Cashflow';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Cashflow', () => {
  it('should render the Cashflow component correctly', () => {
    const mockData = {
      netIncome: 1500000,
      depreciationAndAmortization: 50000,
      deferredIncomeTax: 100000,
      stockBasedCompensation: 75000,
      changeInWorkingCapital: 250000,
      otherNonCashItems: 10000,
      netCashProvidedByOperatingActivities: 2000000,
      investmentsInPropertyPlantAndEquipment: -1000000,
      netCashUsedForInvestingActivites: -1000000,
      debtRepayment: -500000,
      commonStockRepurchased: -250000,
      dividendsPaid: -50000,
      otherFinancingActivites: -10000,
      netChangeInCash: 500000,
      cashAtBeginningOfPeriod: 1000000,
      cashAtEndOfPeriod: 1500000,
    };

    const mockFilteredData = [
      ['netIncome', 1500000],
      ['stockBasedCompensation', 75000],
      ['netCashProvidedByOperatingActivities', 2000000],
      ['investmentsInPropertyPlantAndEquipment', -1000000],
      ['netCashUsedForInvestingActivites', -1000000],
      ['debtRepayment', -500000],
      ['dividendsPaid', -50000],
      ['netChangeInCash', 500000],
      ['cashAtBeginningOfPeriod', 1000000],
      ['cashAtEndOfPeriod', 1500000],
    ];

    useSelector.mockImplementation((selectorFn) => selectorFn({
      data: {
        cashFlow: mockData,
      },
    }));

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <Cashflow />
      </MemoryRouter>
    );

    expect(getByText('Apple Inc')).toBeInTheDocument();
    expect(getByText('Cash Flow')).toBeInTheDocument();
    expect(getByText('Year Ended December 31')).toBeInTheDocument();
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
