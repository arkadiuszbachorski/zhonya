import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import { useSwipeable } from 'react-swipeable';
import styles from './SlidingMenu.module.scss';
import ButtonRoundIcon from '../buttons/ButtonRoundIcon/ButtonRoundIcon';
import AccentTitle from '../typography/AccentTitle/AccentTitle';
import TypographyLogo from '../logos/TypographyLogo/TypographyLogo';

const SlidingMenu = ({ children, titleId, visible, toggle }) => {
    useEffect(() => {
        const close = e => {
            const { code } = e;
            if (code === 'Escape') {
                toggle();
            }
        };

        if (visible) {
            window.addEventListener('keyup', close);
        }

        return () => window.removeEventListener('keyup', close);
    }, [visible]);

    const swipeableHandlers = useSwipeable({
        onSwipedLeft: () => {
            toggle();
        },
    });

    return (
        <>
            <nav className={cn(styles.main, visible ? styles.active : null)} {...swipeableHandlers}>
                <div className={cn(styles.menuWrapper, visible ? styles.active : null)}>
                    <ButtonRoundIcon variant="blank" icon={faArrowLeft} onClick={toggle} />
                    <AccentTitle messageId={titleId} />
                    <div className={styles.content}>{children}</div>
                    <TypographyLogo classNames={styles.typographyLogo} />
                </div>
                <button type="button" onClick={toggle} className={cn(styles.menuClose, visible ? styles.active : null)}>
                    hide
                </button>
            </nav>
        </>
    );
};

SlidingMenu.propTypes = {
    children: PropTypes.node.isRequired,
    titleId: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default SlidingMenu;
