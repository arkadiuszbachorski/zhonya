import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styles from './FormWithCard.module.scss';
import PageTitle from '../../typography/PageTitle/PageTitle';
import Card from '../../cards/Card/Card';
import Form from '../Form/Form';
import FormWithCardButtonSwitch from './FormWithCardButtonSwitch/FormWithCardButtonSwitch';

const FormWithCard = ({ titleId, paragraphIds, children, onSubmit, variant, loading }) => {
    return (
        <div className={styles.wrapper}>
            <Card inverted variant={variant === 'delete' ? 'danger' : 'primary'} className={styles.card}>
                <PageTitle tag="h4" messageId={titleId} />
                {paragraphIds.map(item => (
                    <p key={item}>
                        <FormattedMessage id={item} />
                    </p>
                ))}
            </Card>
            <div className={styles.inputsWrapper}>
                <Form onSubmit={onSubmit}>
                    {children}
                    <FormWithCardButtonSwitch loading={loading} variant={variant} />
                </Form>
            </div>
        </div>
    );
};

FormWithCard.propTypes = {
    titleId: PropTypes.string.isRequired,
    paragraphIds: PropTypes.arrayOf(PropTypes.string),
    variant: PropTypes.oneOf(['create', 'edit', 'delete']).isRequired,
    loading: PropTypes.bool,
    children: PropTypes.node,
    onSubmit: PropTypes.func,
};

FormWithCard.defaultProps = {
    onSubmit: undefined,
    children: undefined,
    paragraphIds: [],
    loading: false,
};

export default FormWithCard;
