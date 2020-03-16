import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './ListCaptionAndColorItem.module.scss';
import ColorPill from '../../ColorPill/ColorPill';
import Caption from '../../typography/Caption/Caption';

const ListCaptionAndColorItem = ({ text, children, caption, color, to, className, onClick }) => {
    return (
        <li className={cn(styles.item, className)}>
            <Link to={to} onClick={onClick}>
                {color && (
                    <div className={styles.color}>
                        <ColorPill color={color} className={styles.colorPill} variant="vertical" />
                    </div>
                )}
                <div className={styles.fonts}>
                    <span>{text}</span>
                    {caption && <Caption>{caption}</Caption>}
                    {children}
                </div>
            </Link>
        </li>
    );
};

ListCaptionAndColorItem.propTypes = {
    text: PropTypes.node.isRequired,
    caption: PropTypes.node,
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
    color: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

ListCaptionAndColorItem.defaultProps = {
    caption: null,
    color: null,
    className: null,
    onClick: null,
    children: undefined,
};

export default ListCaptionAndColorItem;
