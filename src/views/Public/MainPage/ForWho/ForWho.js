import React from 'react';
import { FormattedMessage } from 'react-intl';
import ContentSection from '../../../../components/ContentSection/ContentSection';
import styles from './ForWho.module.scss';
import useLocale from '../../../../hooks/useLocale';

const ForWho = () => {
    const { locale } = useLocale();

    return (
        <ContentSection messageId="forWho.title" className={styles.wrapper}>
            <div className={styles.text}>
                <p>
                    <FormattedMessage id="forWho.text1" />
                </p>
                <p>
                    <FormattedMessage id="forWho.text2" />
                </p>
                <p>
                    <FormattedMessage id="forWho.text3" />
                </p>
            </div>
            <div className={styles.imageWrapper}>
                <div>
                    <img src={`img/showcase/${locale}.png`} alt="app-showcase" />
                </div>
            </div>
        </ContentSection>
    );
};

export default ForWho;
