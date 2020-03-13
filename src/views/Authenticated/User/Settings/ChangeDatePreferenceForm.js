import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import Checkbox from '../../../../components/forms/Checkbox/Checkbox';
import useDatePreference, { availableDatePreferences } from '../../../../hooks/useDatePreference';
import DateDisplay from '../../../../components/DateDisplay/DateDisplay';

const date = new Date();
date.setMinutes(date.getMinutes() - 5);

const ChangeDatePreferenceForm = () => {
    const { datePreference, setDatePreference } = useDatePreference();
    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard
                buttonSwitch={false}
                loading={false}
                variant="edit"
                titleId="user.settings.datePreference.title"
                paragraphIds={['user.settings.datePreference.text1']}
            >
                {availableDatePreferences.map(pref => (
                    <Checkbox
                        key={pref}
                        radio
                        label={
                            <>
                                <FormattedMessage id={`input.datePreference.${pref}`} /> -{' '}
                                <DateDisplay date={date} preference={pref} />
                            </>
                        }
                        name="datePreference"
                        id={`datePreference-${pref}`}
                        value={pref}
                        checked={datePreference === pref}
                        onChange={() => setDatePreference(pref)}
                    />
                ))}
            </FormWithCard>
        </Container>
    );
};

export default ChangeDatePreferenceForm;
