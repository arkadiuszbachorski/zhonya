import React from 'react';
import Button from '../buttons/Button/Button';
import JumbotronTitle from './JumbotronTitle';
import styles from './Jumbotron.module.scss';

const Jumbotron = ({ children, className }) => <div className={styles.jumbotron}>{children}</div>;

Jumbotron.Title = JumbotronTitle;

Jumbotron.Action = Button;

export default Jumbotron;
