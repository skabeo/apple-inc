import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Filter.module.scss';

const Filter = ({ filterValue, onFilterChange }) => {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div>
      <input
        id="filter"
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        className={styles.search}
        placeholder="Search"
      />
    </div>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
