import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Group.module.scss';
import firstLetterUppercase from '../../../utils/firstLetterUppercase';

const Group = ({ className, groupSize, children }) => {
    return (
        <div
            className={cn(
                styles.group,
                groupSize ? styles[`group${firstLetterUppercase(groupSize)}`] : null,
                className,
            )}
        >
            {children}
        </div>
    );
};

Group.propTypes = {
    className: PropTypes.string,
    groupSize: PropTypes.oneOf(['large', 'small']),
    children: PropTypes.node.isRequired,
};

export default Group;
