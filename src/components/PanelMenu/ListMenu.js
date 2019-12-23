import React from 'react';
import PropTypes from 'prop-types';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import IconList from '../IconList/IconList';
import styles from './PanelMenu.module.scss';
import routes from '../../routes';
import SlidingMenu from '../SlidingMenu/SlidingMenu';

const ListMenu = ({ toggle, active }) => {
    return (
        <SlidingMenu toggle={toggle} titleId="action.lists" visible={active}>
            <IconList className={styles.itemList}>
                <IconList.Item icon={faCheckSquare} to={routes.task.index} messageId="model.task.plural" />
                <IconList.Item icon={faTag} to={routes.tag.index} messageId="model.tag.plural" />
            </IconList>
        </SlidingMenu>
    );
};

ListMenu.propTypes = {
    toggle: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
};

export default ListMenu;
