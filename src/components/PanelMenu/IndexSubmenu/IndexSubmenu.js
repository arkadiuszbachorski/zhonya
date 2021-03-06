import React from 'react';
import PropTypes from 'prop-types';
import { faCheckSquare, faClock, faTag } from '@fortawesome/free-solid-svg-icons';
import ListIcon from '../../lists/ListIcon/ListIcon';
import styles from '../PanelMenu.module.scss';
import routes from '../../../routes';
import SlidingMenu from '../../SlidingMenu/SlidingMenu';

const IndexSubmenu = ({ toggle, active }) => {
    return (
        <SlidingMenu toggle={toggle} titleId="action.lists" visible={active}>
            <ListIcon className={styles.itemList}>
                <ListIcon.Item icon={faCheckSquare} to={routes.task.index} messageId="model.task.plural" />
                <ListIcon.Item icon={faTag} to={routes.tag.index} messageId="model.tag.plural" />
                <ListIcon.Item icon={faClock} to={routes.attemptIndependent.index} messageId="model.attempt.plural" />
            </ListIcon>
        </SlidingMenu>
    );
};

IndexSubmenu.propTypes = {
    toggle: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
};

export default IndexSubmenu;
