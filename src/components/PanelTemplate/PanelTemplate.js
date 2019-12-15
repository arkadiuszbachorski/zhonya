import React from 'react';
import PropTypes from 'prop-types';
import PanelMenu from '../PanelMenu/PanelMenu';
import PanelHeader from '../PanelHeader/PanelHeader';
import styles from './PanelTemplate.module.scss';
import IconList from '../IconList/IconList';

const PanelTemplate = ({ children, titleId, secondaryTitleId, actionButton, sideMenuItems, title }) => {
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
                            <IconList className={styles.iconList}>
                                {sideMenuItems.map(({ to, messageId, icon }) => (
                                    <IconList.Item to={to} messageId={messageId} icon={icon} key={to} />
                                ))}
                            </IconList>
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
            icon: PropTypes.object,
        }),
    ),
    children: PropTypes.node.isRequired,
    titleId: PropTypes.string,
    title: PropTypes.string,
    secondaryTitleId: PropTypes.string,
    actionButton: PropTypes.element,
};

PanelTemplate.defaultProps = {
    sideMenuItems: null,
    titleId: null,
    title: null,
    secondaryTitleId: null,
    actionButton: null,
};

export default PanelTemplate;
