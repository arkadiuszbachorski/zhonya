import React from 'react';
import { faList, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import styles from './PanelMenu.module.scss';
import Logo from '../logos/Logo/Logo';
import ButtonRoundIcon from '../buttons/ButtonRoundIcon/ButtonRoundIcon';
import routes from '../../routes';
import useToggle from '../../hooks/useToggle';
import SlidingMenu from '../SlidingMenu/SlidingMenu';

const PanelMenu = () => {
    const [listsActive, toggleLists] = useToggle();
    return (
        <>
            <nav className={styles.mainMenu}>
                <Logo className={styles.logo} inverted stroke={7} />
                <div className={styles.buttonsWrapper}>
                    <ButtonRoundIcon icon={faList} onClick={toggleLists} />
                    <ButtonRoundIcon icon={faPlus} />
                    <ButtonRoundIcon icon={faSearch} />
                </div>
                <div className={cn(styles.buttonsWrapper, styles.bottomButtons)}>
                    <ButtonRoundIcon icon={faUser} link to={routes.userSettings} />
                </div>
            </nav>
            <SlidingMenu toggle={toggleLists} titleId="action.lists" visible={listsActive} />
        </>
    );
};

export default PanelMenu;
