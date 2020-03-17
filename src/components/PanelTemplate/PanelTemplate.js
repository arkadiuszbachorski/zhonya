import React from 'react';
import PropTypes from 'prop-types';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import PanelMenu from '../PanelMenu/PanelMenu';
import PanelHeader from '../PanelHeader/PanelHeader';
import styles from './PanelTemplate.module.scss';
import ListIcon from '../lists/ListIcon/ListIcon';
import customPropTypes from '../../customPropTypes';
import routes from '../../routes';

const PanelTemplate = ({ children, titleId, secondaryTitleId, actionButton, sideMenuItems, title, logOut }) => {
    return (
        <>
            <PanelMenu />
            <div className={styles.wrapper}>
                <PanelHeader
                    titleId={titleId}
                    title={title}
                    secondaryTitleId={secondaryTitleId}
                    actionButton={actionButton}
                />
                <div className={styles.mainWrapper}>
                    {sideMenuItems !== null && (
                        <div className={styles.sideMenu}>
                            <ListIcon className={styles.iconList}>
                                {sideMenuItems.map(({ to, messageId, icon }) => (
                                    <ListIcon.Item to={to} messageId={messageId} icon={icon} key={to} />
                                ))}
                                {logOut && (
                                    <ListIcon.Item
                                        to={routes.logIn}
                                        icon={faSignOutAlt}
                                        messageId="action.logout"
                                        onClick={logOut}
                                    />
                                )}
                            </ListIcon>
                        </div>
                    )}
                    <div className={styles.content}>{children}</div>
                </div>
            </div>
        </>
    );
};

PanelTemplate.propTypes = {
    sideMenuItems: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string,
            messageId: PropTypes.string,
            icon: customPropTypes.fontAwesomeIcon,
        }),
    ),
    children: PropTypes.node,
    titleId: PropTypes.string,
    title: PropTypes.string,
    secondaryTitleId: PropTypes.string,
    actionButton: PropTypes.element,
    logOut: PropTypes.func,
};

PanelTemplate.defaultProps = {
    sideMenuItems: null,
    titleId: null,
    title: null,
    secondaryTitleId: null,
    actionButton: null,
    logOut: null,
};

export default PanelTemplate;
