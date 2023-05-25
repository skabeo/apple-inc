import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle, BsArrowRepeat } from 'react-icons/bs';
import { CiMoneyCheck1 } from 'react-icons/ci';
import { MdBalance } from 'react-icons/md';
import { HiOutlineCash } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import logo from '../assets/apple-logo.png';
import styles from '../styles/Home.module.scss';
import Header from './Header';

const Homepage = () => {
  const [searchInput, setSearchInput] = useState('');

  const {
    incomeStatement, balanceSheet, cashFlow, isLoading,
  } = useSelector((state) => state.data);

  const filteredCards = [
    {
      id: 1, name: 'Income Statement', icon: <HiOutlineCash className={styles.incomeIcon} />, value: incomeStatement.revenue,
    },
    {
      id: 2, name: 'Balance Sheet', icon: <MdBalance className={styles.balanceIcon} />, value: balanceSheet.totalAssets,
    },
    {
      id: 3, name: 'Cash Flow', icon: <BsArrowRepeat className={styles.cashflowIcon} />, value: cashFlow.netIncome,
    },
    {
      id: 4, name: 'Equity', icon: <CiMoneyCheck1 className={styles.equityIcon} />, value: balanceSheet.commonStock,
    },
  ].filter((card) => card.name.toLowerCase().includes(searchInput.toLowerCase()));

  if (isLoading) {
    return (
      <>
        <Header />
        <div className={styles.homeContainer}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt="logo" />
          </div>
          <div className={styles.company}>
            <h3>Apple</h3>
            <h3>Inc</h3>
            <span style={{ fontSize: '12px' }}>
              2022 calender year
            </span>
          </div>
        </div>
        <p className={styles.financial}>FINANCIAL STATEMENTS</p>
        <div className="loading-container">
          <span className="loading" />
        </div>
      </>
    );
  }

  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.homeContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <div className={styles.company}>
          <h3>Apple</h3>
          <h3>Inc</h3>
          <span style={{ fontSize: '12px' }}>
            {incomeStatement.calendarYear}
            {' '}
            calender year
          </span>
        </div>
      </div>
      <p className={styles.financial}>FINANCIAL STATEMENTS</p>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <div className={styles.cards}>
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <NavLink key={card.id} to={`/statement/${card.name.toLowerCase().replace(' ', '-')}`} className={styles.navLink}>
              <div className={index === 1 || index === 2 ? styles.balance : styles.income}>
                <BsArrowRightCircle className={styles.arrow} />
                {card.icon}
                <div className={styles.stateContainer}>
                  <h4 className={styles.flexEnd}>{card.name}</h4>
                  <span className={styles.display}>
                    {card.value ? `${card.name}: $ ${card.value.toLocaleString()}` : 'Loading...'}
                  </span>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <div className={styles.noResults}>No search results</div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
