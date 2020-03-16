import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import Checkbox from '../../../../components/forms/Checkbox/Checkbox';
import useStatisticsPreference from '../../../../hooks/useStatisticsPreference';

const ChangeStatisticsPreferenceForm = () => {
    const { statisticsPreference, setStatisticsPreference } = useStatisticsPreference();

    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard
                buttonSwitch={false}
                loading={false}
                variant="edit"
                titleId="user.settings.statisticsPreference.title"
            >
                {Object.keys(statisticsPreference).map(key => {
                    const value = statisticsPreference[key];
                    return (
                        <Checkbox
                            key={key}
                            checkbox
                            label={
                                <>
                                    <FormattedMessage id={`input.statisticsPreference.${key}`} />
                                </>
                            }
                            name={`statisticsPreference-${key}`}
                            id={`statisticsPreference-${key}`}
                            checked={value}
                            onChange={e => {
                                const { checked } = e.target;
                                return setStatisticsPreference({
                                    [key]: checked,
                                });
                            }}
                        />
                    );
                })}
            </FormWithCard>
        </Container>
    );
};

export default ChangeStatisticsPreferenceForm;
