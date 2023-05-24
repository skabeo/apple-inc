import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Filter from '../components/Filter';

describe('Filter', () => {
  it('should call the onFilterChange function with the updated value when input value changes', () => {
    // Arrange
    const filterValue = 'initial value';
    const onFilterChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Filter filterValue={filterValue} onFilterChange={onFilterChange} />
    );
    const inputElement = getByPlaceholderText('Search');

    // Act
    fireEvent.change(inputElement, { target: { value: 'new value' } });

    // Assert
    expect(onFilterChange).toHaveBeenCalledTimes(1);
    expect(onFilterChange).toHaveBeenCalledWith('new value');
  });
});
