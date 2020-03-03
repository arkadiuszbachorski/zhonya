import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import { useSwipeable } from 'react-swipeable';
import styles from './MainHeader.module.scss';
import CombinedLogo from '../logos/CombinedLogo/CombinedLogo';
import routes from '../../routes';
import Button from '../buttons/Button/Button';
import useAuth from '../../hooks/useAuth';

const MainHeader = () => {
    const [open, setOpen] = useState(false);
    const [auth] = useAuth();
    const swipeableHandlers = useSwipeable({ onSwipedLeft: () => setOpen(false) });
    return (
        <header className={cn(styles.wrapper, open ? styles.open : null)}>
            <CombinedLogo />
            <ul className={styles.links} {...swipeableHandlers}>
                {auth.token === null ? (
                    <>
                        <li>
                            <Link to={routes.logIn}>
                                <FormattedMessage id="logIn" />
                            </Link>
                        </li>
                        <li>
                            <Button link to={routes.signUp} variant="primaryLight">
                                <FormattedMessage id="signUp" />
                            </Button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Button link to={routes.signUp} variant="primaryLight">
                                <FormattedMessage id="action.dashboard" />
                            </Button>
                        </li>
                    </>
                )}
            </ul>
            <Button
                variant="blank"
                size="large"
                className={[styles.menuToggleButton]}
                round
                onClick={() => setOpen(op => !op)}
            >
                <FontAwesomeIcon icon={faBars} />
            </Button>
            <button type="button" className={styles.menuClose} onClick={() => setOpen(false)} {...swipeableHandlers}>
                Close menu
            </button>
        </header>
    );
};

export default MainHeader;
