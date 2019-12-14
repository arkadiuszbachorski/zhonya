import React from 'react';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import Checkbox from '../../../../components/forms/Checkbox/Checkbox';
import locale from '../../../../locale';
import useLocale from '../../../../hooks/useLocale';

const availableLocales = Object.keys(locale);

const ChangeLocaleForm = () => {
    const [currentLocale, setLocale] = useLocale();
    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard buttonSwitch={false} loading={false} variant="edit" titleId="user.settings.locale.title">
                {availableLocales.map(item => (
                    <Checkbox
                        key={item}
                        radio
                        labelId={`input.locale.${item}`}
                        name="locale"
                        id={`locale-${item}`}
                        value={item}
                        checked={currentLocale === item}
                        onChange={() => setLocale(item)}
                    />
                ))}
            </FormWithCard>
        </Container>
    );
};

export default ChangeLocaleForm;
