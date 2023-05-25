import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from '../styles/Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <p>Home</p>
    <FaUserCircle className={styles.icon} />
  </div>
);

export default Header;
