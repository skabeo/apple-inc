import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import styles from '../styles/Back.module.scss';

const Back = () => (
  <div className={styles.header}>
    <Link to="/" className={styles.link}>
      <IoIosArrowBack className={styles.icon} />
    </Link>
    <FaUserCircle className={styles.icon} />
  </div>
);

export default Back;
