import React from 'react';
import { faList, faPlus, faSearch, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import cn from 'classnames';
import styles from './PanelMenu.module.scss';
import Logo from '../logos/Logo/Logo';
import ButtonRoundIcon from '../buttons/ButtonRoundIcon/ButtonRoundIcon';
import routes from '../../routes';
import useToggle from '../../hooks/useToggle';
import SlidingMenu from '../SlidingMenu/SlidingMenu';
import IconList from '../IconList/IconList';

const PanelMenu = () => {
    const [listMenuActive, toggleListMenu] = useToggle();
    const [createMenuActive, toggleCreateMenu] = useToggle();
    const [searchMenuActive, toggleSearchMenu] = useToggle();
    return (
        <>
            <nav className={styles.mainMenu}>
                <Logo className={styles.logo} inverted stroke={7} />
                <div className={styles.buttonsWrapper}>
                    <ButtonRoundIcon icon={faList} onClick={toggleListMenu} />
                    <ButtonRoundIcon icon={faPlus} onClick={toggleCreateMenu} />
                    <ButtonRoundIcon icon={faSearch} onClick={toggleSearchMenu} />
                </div>
                <div className={cn(styles.buttonsWrapper, styles.bottomButtons)}>
                    <ButtonRoundIcon icon={faUser} link to={routes.userSettings} />
                </div>
            </nav>
            <SlidingMenu toggle={toggleListMenu} titleId="action.lists" visible={listMenuActive}>
                <IconList className={styles.itemList}>
                    <IconList.Item icon={faCheckSquare} to={routes.taskIndex} messageId="model.task.plural" />
                    <IconList.Item icon={faTag} to={routes.tagIndex} messageId="model.tag.plural" />
                </IconList>
            </SlidingMenu>
            <SlidingMenu toggle={toggleCreateMenu} titleId="action.create" visible={createMenuActive}>
                <IconList className={styles.itemList}>
                    <IconList.Item icon={faCheckSquare} to={routes.taskCreate} messageId="model.task.singular" />
                    <IconList.Item icon={faTag} to={routes.tagCreate} messageId="model.tag.singular" />
                </IconList>
            </SlidingMenu>
            <SlidingMenu toggle={toggleSearchMenu} titleId="action.search" visible={searchMenuActive}>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
                <p>
                    todo
                    <br />
                </p>
            </SlidingMenu>
        </>
    );
};

export default PanelMenu;
