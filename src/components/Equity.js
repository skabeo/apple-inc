import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Back from './Back';
import styles from '../styles/Details.module.scss';
import Filter from './Filter';

const Equity = () => {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  const data = useSelector((state) => state.data.balanceSheet);

  const keysToFilter = ['commonStock', 'retainedEarnings', 'accumulatedOtherComprehensiveIncomeLoss', 'totalEquity', 'totalInvestments'];

  const filteredData = Object.entries(data).filter(([key]) => keysToFilter.includes(key)
    && key.toLowerCase().includes(filterValue.toLowerCase()));

  return (
    <div>
      <Back />
      <div className={styles.description}>
        <p>Apple Inc</p>
        <p>Balance Sheet</p>
        <p>Year Ended December 31</p>
      </div>
      <div className={styles.operations}>
        <div className={styles.searchField}>
          <Filter
            filterValue={filterValue}
            onFilterChange={handleFilterChange}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>$</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="2">No search results</td>
              </tr>
            ) : (
              filteredData.map(([key, value]) => (
                <tr key={key} className={styles.myTable}>
                  <td>{key}</td>
                  <td>{value.toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Equity;
