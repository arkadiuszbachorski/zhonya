import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import ContentSection from '../../../../components/ContentSection/ContentSection';
import styles from './Contact.module.scss';
import Input from '../../../../components/forms/Input/Input';
import FormInCard from '../../../../components/forms/FormInCard/FormInCard';
import useForm from '../../../../hooks/useForm';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import api from '../../../../api';

const Contact = () => {
    const { formatMessage } = useIntl();

    const [form, handleChange, resetForm] = useForm({
        name: '',
        email: '',
        message: '',
    });

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const handleSubmit = () => {
        instance.post(api.contact, form).then(() => {
            toast.success(formatMessage({ id: 'toast.success.sendContactEmail' }));
            resetForm();
        });
    };

    return (
        <ContentSection messageId="contact.title" className={styles.wrapper}>
            <div className={styles.socialWrapper}>
                <h4>
                    <FormattedMessage id="contact.welcome" />
                </h4>
                <div className={styles.questions}>
                    <p>
                        <FormattedMessage id="contact.questionType1" />
                        <br />
                        <FormattedMessage id="contact.questionType2" />
                        <br />
                        <FormattedMessage id="contact.questionType3" />
                        <br />
                    </p>
                    <p>
                        <FormattedMessage id="contact.text2" />
                    </p>
                </div>
                <div className={styles.creator}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
                            alt="icon"
                        />
                    </div>
                    <div className={styles.textWrapper}>
                        <p>
                            <strong>Arkadiusz Bachorski</strong>
                            <br />
                            <FormattedMessage id="contact.creator" />
                            <br />
                            <br />
                            email@kontakt.com
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.formWrapper}>
                <FormInCard buttonMessageId="send" onSubmit={handleSubmit} loading={loading}>
                    <Input
                        labelId="input.firstName"
                        name="name"
                        groupSize="large"
                        value={form.name}
                        errors={errors.name}
                        onChange={handleChange}
                    />
                    <Input
                        labelId="input.contactEmail"
                        type="email"
                        name="email"
                        groupSize="large"
                        value={form.email}
                        errors={errors.email}
                        onChange={handleChange}
                    />
                    <Input
                        textarea
                        labelId="input.message"
                        name="message"
                        groupSize="large"
                        value={form.message}
                        errors={errors.message}
                        onChange={handleChange}
                    />
                </FormInCard>
            </div>
        </ContentSection>
    );
};

export default Contact;
