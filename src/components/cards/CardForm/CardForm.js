import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input/Input';
import Card from '../Card/Card';
import Button from '../../buttons/Button/Button';
import { FormattedMessage } from 'react-intl';
import styles from './CardForm.module.scss';

const CardForm = ({ onSubmit, buttonMessageId, children, loading }) => {
    return (
        <Card className={styles.card}>
            <form onSubmit={onSubmit} className={styles.formWrapper}>
                {children}
                <Button type="submit" className={styles.submitButton} disabled={loading}>
                    <FormattedMessage id={buttonMessageId} />
                </Button>
            </form>
        </Card>
    );
};

CardForm.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
    onSubmit: PropTypes.func.isRequired,
    buttonMessageId: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

CardForm.defaultProps = {
    loading: false,
};

export default CardForm;
