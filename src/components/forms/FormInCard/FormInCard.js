import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Card from '../../Card/Card';
import Button from '../../buttons/Button/Button';
import styles from './FormInCard.module.scss';
import Form from '../Form/Form';
import customPropTypes from '../../../customPropTypes';

const FormInCard = ({ variant, onSubmit, buttonMessageId, children, loading }) => {
    return (
        <Card variant={variant} className={styles.card}>
            <Form onSubmit={onSubmit} className={styles.formWrapper} loading={loading}>
                {children}
                <Button variant={variant} type="submit" className={styles.submitButton} disabled={loading}>
                    <FormattedMessage id={buttonMessageId} />
                </Button>
            </Form>
        </Card>
    );
};

FormInCard.propTypes = {
    variant: customPropTypes.cardVariant,
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
    buttonMessageId: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

FormInCard.defaultProps = {
    loading: false,
    variant: 'primary',
};

export default FormInCard;
