import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBatteryFull,
    faChartBar,
    faCheckSquare,
    faClock,
    faCoins,
    faRedo,
    faTags,
} from '@fortawesome/free-solid-svg-icons';
import ContentSection from '../../../../components/ContentSection/ContentSection';
import styles from './HowItWorks.module.scss';

const HowItWorks = () => {
    return (
        <ContentSection
            messageId="howItWorks.title"
            containerClassName={styles.fill}
            className={styles.wrapper}
            variant="primary"
        >
            <div className={styles.instructionWrapper}>
                <div className={styles.instruction} data-aos="zoom-in" data-aos-delay="0">
                    <div className={styles.instructionIcon}>
                        <FontAwesomeIcon size="2x" icon={faCheckSquare} />
                    </div>
                    <FormattedMessage id="howItWorks.instruction.tasks" />
                </div>
                <div className={styles.instruction} data-aos="zoom-in" data-aos-delay="100">
                    <div className={styles.instructionIcon}>
                        <FontAwesomeIcon size="2x" icon={faTags} />
                    </div>
                    <FormattedMessage id="howItWorks.instruction.tags" />
                </div>
                <div className={styles.instruction} data-aos="zoom-in" data-aos-delay="300">
                    <div className={styles.instructionIcon}>
                        <FontAwesomeIcon size="2x" icon={faClock} />
                    </div>
                    <FormattedMessage id="howItWorks.instruction.attempts" />
                </div>
                <div className={styles.instruction} data-aos="zoom-in" data-aos-delay="400">
                    <div className={styles.instructionIcon}>
                        <FontAwesomeIcon size="2x" icon={faChartBar} />
                    </div>
                    <FormattedMessage id="howItWorks.instruction.statistics" />
                </div>
            </div>
            <div className={styles.next} data-aos="fade-in" data-aos-delay="400">
                <FormattedMessage id="howItWorks.next" />
            </div>
            <div className={styles.iconsWrapper} data-aos="zoom-in" data-aos-delay="600">
                <div className={styles.icon}>
                    <FontAwesomeIcon size="3x" icon={faRedo} />
                </div>
                <div className={styles.icon}>
                    <FontAwesomeIcon size="3x" icon={faCoins} />
                </div>
                <div className={styles.icon}>
                    <FontAwesomeIcon size="3x" icon={faBatteryFull} />
                </div>
            </div>
            <div className={styles.conclusionWrapper} data-aos="zoom-in" data-aos-delay="1000">
                <p>
                    <FormattedMessage id="howItWorks.conclusion" />
                </p>
            </div>
        </ContentSection>
    );
};

export default HowItWorks;
