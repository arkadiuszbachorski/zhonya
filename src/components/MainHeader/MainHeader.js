import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styles from './MainHeader.module.scss';
import CombinedLogo from '../logos/CombinedLogo/CombinedLogo';
import routes from '../../routes';
import Button from '../buttons/Button/Button';

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
