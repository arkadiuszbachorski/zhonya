import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainHeader.module.scss';
import CombinedLogo from '../logos/CombinedLogo/CombinedLogo';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Button from '../buttons/Button/Button';
import { FormattedMessage } from 'react-intl';

const MainHeader = ({ links }) => (
    <header className={styles.wrapper}>
        <CombinedLogo />
        {links && (
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
        )}
    </header>
);

MainHeader.propTypes = {
    links: PropTypes.bool,
};

MainHeader.defaultProps = {
    links: false,
};

export default MainHeader;
