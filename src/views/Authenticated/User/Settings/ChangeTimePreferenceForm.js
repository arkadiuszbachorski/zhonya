import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import Checkbox from '../../../../components/forms/Checkbox/Checkbox';
import useTimePreference, { availableTimePreferences } from '../../../../hooks/useTimePreference';
import Time from '../../../../components/Time/Time';

const equalTime = 3 * (60 * 60 * 24) + 22 * (60 * 60) + 3 * 60 + 9;

const ChangeTimePreferenceForm = () => {
    const [timePreference, setTimePreference] = useTimePreference();

    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard
                buttonSwitch={false}
                loading={false}
                variant="edit"
                titleId="user.settings.timePreference.title"
                paragraphIds={['user.settings.timePreference.text1']}
            >
                {availableTimePreferences.map(pref => (
                    <Checkbox
                        key={pref}
                        radio
                        label={
                            <>
                                <FormattedMessage id={`input.timePreference.${pref}`} /> -{' '}
                                <Time time={equalTime} timePreference={pref} />
                            </>
                        }
                        name="timePreference"
                        id={`timePreference-${pref}`}
                        value={pref}
                        checked={timePreference === pref}
                        onChange={() => setTimePreference(pref)}
                    />
                ))}
            </FormWithCard>
        </Container>
    );
};

export default ChangeTimePreferenceForm;
