import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import BalanceSheet from '../components/BalanceSheet';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('BalanceSheet', () => {
  it('should render the BalanceSheet component correctly', () => {
    const mockData = {
      cashAndCashEquivalents: 500000,
      shortTermInvestments: 1000000,
      netReceivables: 300000,
      inventory: 200000,
      totalCurrentAssets: 2500000,
      propertyPlantEquipmentNet: 3500000,
      longTermInvestments: 1000000,
      totalAssets: 7000000,
      accountPayable: 400000,
      shortTermDebt: 500000,
      deferredRevenue: 200000,
      totalCurrentLiabilities: 1500000,
      totalLiabilities: 2000000,
    };

    const mockFilteredData = [
      ['cashAndCashEquivalents', 500000],
      ['netReceivables', 300000],
      ['propertyPlantEquipmentNet', 3500000],
      ['totalAssets', 7000000],
    ];

    useSelector.mockImplementation((selectorFn) => selectorFn({
      data: {
        balanceSheet: mockData,
      },
    }));

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <BalanceSheet />
      </MemoryRouter>
    );

    expect(getByText('Apple Inc')).toBeInTheDocument();
    expect(getByText('Balance Sheet')).toBeInTheDocument();
    expect(getByText('Year Ended December 31')).toBeInTheDocument();
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
