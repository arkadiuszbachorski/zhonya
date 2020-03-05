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
                <div className={styles.instruction}>
                    <div className={styles.instructionIcon}>
                        <FontAwesomeIcon size="2x" icon={faCheckSquare} />
                    </div>
                    <FormattedMessage id="howItWorks.instruction.tasks" />
                </div>
                <div className={styles.instruction}>
                    <div className={styles.instructionIcon}>
                        <FontAwesomeIcon size="2x" icon={faTags} />
                    </div>
                    <FormattedMessage id="howItWorks.instruction.tags" />
                </div>
                <div className={styles.instruction}>
                    <div className={styles.instructionIcon}>
                        <FontAwesomeIcon size="2x" icon={faClock} />
                    </div>
                    <FormattedMessage id="howItWorks.instruction.attempts" />
                </div>
                <div className={styles.instruction}>
                    <div className={styles.instructionIcon}>
                        <FontAwesomeIcon size="2x" icon={faChartBar} />
                    </div>
                    <FormattedMessage id="howItWorks.instruction.statistics" />
                </div>
            </div>
            <div className={styles.next}>
                <FormattedMessage id="howItWorks.next" />
            </div>
            <div className={styles.iconsWrapper}>
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
            <div className={styles.conclusionWrapper}>
                <p>
                    <FormattedMessage id="howItWorks.conclusion" />
                </p>
            </div>
        </ContentSection>
    );
};

export default HowItWorks;
