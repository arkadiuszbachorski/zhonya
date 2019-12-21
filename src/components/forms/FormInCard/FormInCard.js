import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Card from '../../Card/Card';
import Button from '../../buttons/Button/Button';
import styles from './FormInCard.module.scss';
import Form from '../Form/Form';

const FormInCard = ({ onSubmit, buttonMessageId, children, loading }) => {
    return (
        <Card className={styles.card}>
            <Form onSubmit={onSubmit} className={styles.formWrapper} loading={loading}>
                {children}
                <Button type="submit" className={styles.submitButton} disabled={loading}>
                    <FormattedMessage id={buttonMessageId} />
                </Button>
            </Form>
        </Card>
    );
};

FormInCard.propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
    buttonMessageId: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

FormInCard.defaultProps = {
    loading: false,
};

export default FormInCard;
