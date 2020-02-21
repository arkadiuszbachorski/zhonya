import React from 'react';
import { faList, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import { useIntl } from 'react-intl';
import styles from './PanelMenu.module.scss';
import Logo from '../logos/Logo/Logo';
import ButtonRoundIcon from '../buttons/ButtonRoundIcon/ButtonRoundIcon';
import routes from '../../routes';
import useToggle from '../../hooks/useToggle';
import IndexSubmenu from './IndexSubmenu/IndexSubmenu';
import CreateSubmenu from './CreateSubmenu/CreateSubmenu';
import SearchSubmenu from './SearchSubmenu/SearchSubmenu';

const PanelMenu = () => {
    const { formatMessage } = useIntl();
    const [listMenuActive, toggleListMenu] = useToggle();
    const [createMenuActive, toggleCreateMenu] = useToggle();
    const [searchMenuActive, toggleSearchMenu] = useToggle();
    return (
        <>
            <nav className={styles.mainMenu}>
                <Logo className={styles.logo} linkClassName={styles.logoLink} stroke={7} />
                <div className={styles.buttonsWrapper}>
                    <ButtonRoundIcon
                        icon={faList}
                        className={styles.button}
                        onClick={toggleListMenu}
                        title={formatMessage({ id: 'action.lists' })}
                    />
                    <ButtonRoundIcon
                        icon={faPlus}
                        className={styles.button}
                        onClick={toggleCreateMenu}
                        title={formatMessage({ id: 'action.create' })}
                    />
                    <ButtonRoundIcon
                        icon={faSearch}
                        className={styles.button}
                        onClick={toggleSearchMenu}
                        title={formatMessage({ id: 'action.search' })}
                    />
                </div>
                <div className={cn(styles.buttonsWrapper, styles.bottomButtons)}>
                    <ButtonRoundIcon
                        icon={faUser}
                        link
                        to={routes.user.dashboard}
                        title={formatMessage({ id: 'action.settings' })}
                    />
                </div>
            </nav>
            <IndexSubmenu toggle={toggleListMenu} active={listMenuActive} />
            <CreateSubmenu toggle={toggleCreateMenu} active={createMenuActive} />
            <SearchSubmenu toggle={toggleSearchMenu} active={searchMenuActive} />
        </>
    );
};

export default PanelMenu;
