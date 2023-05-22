import React, { useEffect } from 'react';
import { BsArrowRightCircle, BsArrowRepeat } from 'react-icons/bs';
import { CiMoneyCheck1 } from 'react-icons/ci';
import { MdBalance } from 'react-icons/md';
import { HiOutlineCash } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIncomeData } from '../redux/statements/statementsSlice';
import logo from '../assets/apple-logo.png';
import styles from '../styles/Home.module.scss';

const Homepage = () => {
  const dispatch = useDispatch();
  const { incomeStatement } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchIncomeData());
  }, [dispatch]);

  return (
    <>
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

        <div className={styles.balance}>
          <BsArrowRightCircle className={styles.arrow} />
          <MdBalance className={styles.balanceIcon} />
          <div className={styles.stateContainer}>
            <h4 className={styles.flexEnd}>Balance</h4>
            <h4 className={styles.flexEnd}>Sheet</h4>
            <span className={styles.display}>
              Total Assets:
              {incomeStatement.revenue}
            </span>
          </div>
        </div>

        <div className={styles.cashflow}>
          <BsArrowRightCircle className={styles.arrow} />
          <BsArrowRepeat className={styles.cashflowIcon} />
          <div className={styles.stateContainer}>
            <h4 className={styles.flexEnd}>Cash</h4>
            <h4 className={styles.flexEnd}>Flow</h4>
            <span className={styles.display}>
              Net Income:
              {incomeStatement.revenue}
            </span>
          </div>
        </div>

        <div className={styles.equity}>
          <BsArrowRightCircle className={styles.arrow} />
          <CiMoneyCheck1 className={styles.equityIcon} />
          <div className={styles.stateContainer}>
            <h4 className={styles.flexEnd}>Equity</h4>
            <span className={styles.display}>
              Dividend:
              {incomeStatement.revenue}
            </span>
          </div>
        </div>

      </div>
    </>
  );
};

export default Homepage;
