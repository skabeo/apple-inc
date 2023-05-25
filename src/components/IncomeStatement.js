import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Back from './Back';
import styles from '../styles/Details.module.scss';
import Filter from './Filter';

const IncomeStatement = () => {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  const data = useSelector((state) => state.data.incomeStatement);

  const keysToFilter = ['revenue', 'costOfRevenue', 'grossProfit', 'interestIncome', 'interestExpense', 'operatingExpenses', 'costAndExpenses', 'depreciationAndAmortization', 'operatingIncome', 'incomeBeforeTax', 'incomeTaxExpense', 'netIncome'];

  const filteredData = Object.entries(data).filter(([key]) => keysToFilter.includes(key)
    && key.toLowerCase().includes(filterValue.toLowerCase()));

  return (
    <div>
      <Back />
      <div className={styles.description}>
        <p>Apple Inc</p>
        <p>Income Statement</p>
        <p>Year Ended December 31</p>
      </div>
      <div className={styles.operations}>
        <div className={styles.searchField}>
          <Filter
            data={data}
            filterValue={filterValue}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div>
          <div className="myTable">
            <p className="list-description">Description</p>
            <p className="dollar">$</p>
          </div>
          <div>
            {filteredData.length === 0 ? (
              <p className="no-result">No search results</p>
            ) : (
              filteredData.map(([key, value], index) => (
                <div key={key} className="myTable">
                  <p className={index % 2 === 0 ? 'even' : 'odd'}>{key}</p>
                  <p className={index % 2 === 0 ? 'even2' : 'odd'}>{value.toLocaleString()}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeStatement;
