import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styles from './MainHeader.module.scss';
import CombinedLogo from '../logos/CombinedLogo/CombinedLogo';
import routes from '../../routes';
import Button from '../buttons/Button/Button';

const MainHeader = () => (
    <header className={styles.wrapper}>
        <CombinedLogo />
        <ul className={styles.links}>
            <li>
                <Link to={routes.logIn}>
                    <FormattedMessage id="logIn" />
                </Link>
            </li>
            <li>
                <Button link to={routes.signUp}>
                    <FormattedMessage id="signUp" />
                </Button>
            </li>
        </ul>
    </header>
);

export default MainHeader;
