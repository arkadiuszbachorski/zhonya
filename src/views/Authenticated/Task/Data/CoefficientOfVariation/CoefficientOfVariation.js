import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import roundTo from '../../../../../utils/roundTo';
import styles from './CoefficientOfVariation.module.scss';

const CoefficientOfVariation = ({ value }) => {
    const { coefficient, variant } = useMemo(() => {
        let rounded = roundTo(value, 3);
        let className;
        if (rounded < 0.25) {
            className = 'low';
        } else if (rounded < 0.5) {
            className = 'medium';
        } else if (rounded < 1) {
            className = 'high';
        } else {
            className = 'veryHigh';
        }

        rounded = `${rounded * 100}%`;

        return {
            coefficient: rounded,
            variant: className,
        };
    }, [value]);
    return <span className={styles[variant]}>{coefficient}</span>;
};

CoefficientOfVariation.propTypes = {
    value: PropTypes.number,
};

CoefficientOfVariation.defaultProps = {
    value: null,
};

export default CoefficientOfVariation;
