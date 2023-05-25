import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Equity from '../components/Equity';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Equity', () => {
  it('should render the Equity component correctly', () => {
    const mockData = {
      commonStock: 500000,
      retainedEarnings: 2000000,
      accumulatedOtherComprehensiveIncomeLoss: -50000,
      totalEquity: 2250000,
    };

    useSelector.mockImplementation((selectorFn) => selectorFn({
      data: {
        balanceSheet: mockData,
      },
    }));

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <Equity />
      </MemoryRouter>,
    );

    expect(getByText('Apple Inc')).toBeInTheDocument();
    expect(getByText('Statement of Equity')).toBeInTheDocument();
    expect(getByText('Year Ended December 31')).toBeInTheDocument();
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
