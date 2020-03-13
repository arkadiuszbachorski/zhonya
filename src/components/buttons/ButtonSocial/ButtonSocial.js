import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FormattedMessage } from 'react-intl';
import Button from '../Button/Button';
import styles from './ButtonSocial.module.scss';

const ButtonSocial = ({ variant, messageId, className, ...props }) => {
    const icon = useMemo(() => {
        switch (variant) {
            case 'facebook':
                return faFacebookF;
            default:
                throw new Error('');
        }
    }, [variant]);
    return (
        <Button variant={variant} size="small" className={cn(className, styles.button)} {...props}>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
            <FormattedMessage id={messageId} />
        </Button>
    );
};

ButtonSocial.propTypes = {
    variant: PropTypes.oneOf(['facebook']).isRequired,
    messageId: PropTypes.string.isRequired,
    className: PropTypes.string,
};

ButtonSocial.defaultProps = {
    className: null,
};

export default ButtonSocial;
