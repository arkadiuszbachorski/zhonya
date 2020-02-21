import React from 'react';
import { FormattedMessage } from 'react-intl';
import ContentSection from '../../../../components/ContentSection/ContentSection';
import styles from './ForWho.module.scss';

const ForWho = () => {
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
            <div className={styles.image}>
                {/* todo: change image */}
                <img
                    src="https://www.cashbackworld.com/media/pl/content-pages/mobile-app-2019.png"
                    alt="app-showcase"
                />
            </div>
        </ContentSection>
    );
};

export default ForWho;
