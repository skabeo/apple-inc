import React from 'react';
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
  const { incomeStatement, balanceSheet, cashFlow } = useSelector((state) => state.data);

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
      <div className={styles.cards}>

        <NavLink to="/income-statement" className={styles.navLink}>
          <div className={styles.income}>
            <BsArrowRightCircle className={styles.arrow} />
            <HiOutlineCash className={styles.incomeIcon} />
            <div className={styles.stateContainer}>
              <h4 className={styles.flexEnd}>Income</h4>
              <h4 className={styles.flexEnd}>Statement</h4>
              <span className={styles.display}>
                Revenue: $
                {' '}
                {incomeStatement.revenue ? incomeStatement.revenue.toLocaleString() : 'Loading...'}
              </span>
            </div>
          </div>
        </NavLink>

        <NavLink to="/balance-sheet" className={styles.navLink}>
          <div className={styles.balance}>
            <BsArrowRightCircle className={styles.arrow} />
            <MdBalance className={styles.balanceIcon} />
            <div className={styles.stateContainer}>
              <h4 className={styles.flexEnd}>Balance</h4>
              <h4 className={styles.flexEnd}>Sheet</h4>
              <span className={styles.display}>
                Total Assets: $
                {' '}
                {balanceSheet.totalAssets ? balanceSheet.totalAssets.toLocaleString() : 'Loading...'}
              </span>
            </div>
          </div>
        </NavLink>

        <NavLink to="/cash-flow" className={styles.navLink}>
          <div className={styles.cashflow}>
            <BsArrowRightCircle className={styles.arrow} />
            <BsArrowRepeat className={styles.cashflowIcon} />
            <div className={styles.stateContainer}>
              <h4 className={styles.flexEnd}>Cash</h4>
              <h4 className={styles.flexEnd}>Flow</h4>
              <span className={styles.display}>
                Net Income: $
                {' '}
                {cashFlow.netIncome ? cashFlow.netIncome.toLocaleString() : 'Loading...'}
              </span>
            </div>
          </div>
        </NavLink>

        <NavLink to="/equity" className={styles.navLink}>
          <div className={styles.equity}>
            <BsArrowRightCircle className={styles.arrow} />
            <CiMoneyCheck1 className={styles.equityIcon} />
            <div className={styles.stateContainer}>
              <h4 className={styles.flexEnd}>Equity</h4>
              <span className={styles.display}>
                Common Stock: $
                {' '}
                {balanceSheet.commonStock ? balanceSheet.commonStock.toLocaleString() : 'Loading...'}
              </span>
            </div>
          </div>
        </NavLink>

      </div>
    </div>
  );
};

export default Homepage;
