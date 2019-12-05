import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styles from './MainHeader.module.scss';
import CombinedLogo from '../logos/CombinedLogo/CombinedLogo';
import routes from '../../routes';
import Button from '../buttons/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

const MainHeader = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className={cn(styles.wrapper, open ? styles.open : null)}>
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
            <Button
                variant="blank"
                size="large"
                className={[styles.menuToggleButton]}
                round
                onClick={() => setOpen(open => !open)}
            >
                <FontAwesomeIcon icon={faBars} />
            </Button>
            <button type="button" className={styles.menuClose} onClick={() => setOpen(false)}>
                Close menu
            </button>
        </header>
    );
};

export default MainHeader;
