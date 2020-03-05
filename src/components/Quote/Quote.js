import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import styles from './Quote.module.scss';

const Quote = ({ content, author, className }) => {
    return (
        <div className={cn(styles.wrapper, className)}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={faQuoteRight} size="lg" className={styles.icon} />
            </div>
            <div className={styles.content}>
                {typeof content === 'string'
                    ? content
                    : content.map(item => (
                          <span key={item}>
                              {item}
                              <br />
                          </span>
                      ))}
            </div>
            <div className={styles.author}>{author}</div>
        </div>
    );
};

Quote.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    author: PropTypes.string.isRequired,
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};

Quote.defaultProps = {
    className: null,
};

export default Quote;
