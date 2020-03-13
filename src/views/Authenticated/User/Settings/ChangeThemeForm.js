import React from 'react';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import useTheme from '../../../../hooks/useTheme';
import Checkbox from '../../../../components/forms/Checkbox/Checkbox';

const availableThemes = ['light', 'dark'];

const ChangeThemeForm = () => {
    const { theme, setTheme } = useTheme();
    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard buttonSwitch={false} loading={false} variant="edit" titleId="user.settings.theme.title">
                {availableThemes.map(item => (
                    <Checkbox
                        key={item}
                        radio
                        labelId={`input.theme.${item}`}
                        name="theme"
                        id={`theme-${item}`}
                        value={item}
                        checked={theme === item}
                        onChange={() => setTheme(item)}
                    />
                ))}
            </FormWithCard>
        </Container>
    );
};

export default ChangeThemeForm;
