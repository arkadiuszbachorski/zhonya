import React from 'react';
import { faList, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import styles from './PanelMenu.module.scss';
import Logo from '../logos/Logo/Logo';
import ButtonRoundIcon from '../buttons/ButtonRoundIcon/ButtonRoundIcon';
import routes from '../../routes';
import useToggle from '../../hooks/useToggle';
import ListMenu from './ListMenu';
import CreateMenu from './CreateMenu';
import SearchMenu from './SearchMenu';

const PanelMenu = () => {
    const [listMenuActive, toggleListMenu] = useToggle();
    const [createMenuActive, toggleCreateMenu] = useToggle();
    const [searchMenuActive, toggleSearchMenu] = useToggle();
    return (
        <>
            <nav className={styles.mainMenu}>
                <Logo className={styles.logo} stroke={7} />
                <div className={styles.buttonsWrapper}>
                    <ButtonRoundIcon icon={faList} onClick={toggleListMenu} />
                    <ButtonRoundIcon icon={faPlus} onClick={toggleCreateMenu} />
                    <ButtonRoundIcon icon={faSearch} onClick={toggleSearchMenu} />
                </div>
                <div className={cn(styles.buttonsWrapper, styles.bottomButtons)}>
                    <ButtonRoundIcon icon={faUser} link to={routes.user.settings} />
                </div>
            </nav>
            <ListMenu toggle={toggleListMenu} active={listMenuActive} />
            <CreateMenu toggle={toggleCreateMenu} active={createMenuActive} />
            <SearchMenu toggle={toggleSearchMenu} active={searchMenuActive} />
        </>
    );
};

export default PanelMenu;
