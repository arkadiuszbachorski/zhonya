import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ListCaptionAndColorItem.module.scss';
import ColorPill from '../../ColorPill/ColorPill';
import Caption from '../../typography/Caption/Caption';

const ListCaptionAndColorItem = ({ text, caption, color, to }) => {
    return (
        <li className={styles.item}>
            <Link to={to}>
                {color && (
                    <div className={styles.color}>
                        <ColorPill color={color} className={styles.colorPill} variant="vertical" />
                    </div>
                )}
                <div className={styles.fonts}>
                    <span>{text}</span>
                    <Caption>{caption}</Caption>
                </div>
            </Link>
        </li>
    );
};

ListCaptionAndColorItem.propTypes = {
    text: PropTypes.node.isRequired,
    caption: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    color: PropTypes.string,
};

ListCaptionAndColorItem.defaultProps = {
    color: null,
};

export default ListCaptionAndColorItem;
