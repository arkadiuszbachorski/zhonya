import React from 'react';
import PropTypes from 'prop-types';
import styles from './PanelHeader.module.scss';
import PageTitle from '../typography/PageTitle/PageTitle';
import PageSecondaryTitle from '../typography/PageSecondaryTitle/PageSecondaryTitle';

const PanelHeader = ({ secondaryTitleId, actionButton, titleId, title }) => (
    <div className={styles.headerRow}>
        {titleId && (
            <div>
                <PageTitle messageId={titleId} />
                {secondaryTitleId && <PageSecondaryTitle messageId={secondaryTitleId} />}
            </div>
        )}
        {actionButton && <div className={styles.actionButtonWrapper}>{actionButton}</div>}
    </div>
);

PanelHeader.propTypes = {
    titleId: PropTypes.string,
    secondaryTitleId: PropTypes.string,
    actionButton: PropTypes.element,
};

PanelHeader.defaultProps = {
    actionButton: null,
    titleId: null,
    secondaryTitleId: null,
};

export default PanelHeader;
