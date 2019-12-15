import React, { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import Checkbox from './Checkbox';
import '@testing-library/jest-dom/extend-expect';

const TestContainer = props => {
    const [value, setValue] = useState('');

    return <Checkbox value={value} onChange={e => setValue(e.target.checked)} name="name" label="Email" {...props} />;
};

describe('Component - Checkbox', () => {
    it('onChange method', () => {
        const { getByLabelText } = render(<TestContainer />);
        const input = getByLabelText('Email');

        expect(input.checked).toBe(false);

        const fakeEvent = {
            target: {
                checked: true,
            },
        };
        fireEvent.change(input, fakeEvent);

        expect(input.checked).toBe(true);
    });

    it('disabled', () => {
        const { getByLabelText } = render(<TestContainer disabled />);
        const input = getByLabelText('Email');

        expect(input.disabled).toBe(true);
    });

    it('prints errors', () => {
        const { getByText } = render(<TestContainer errors={['Something broke']} />);
        const input = getByText('Something broke');

        expect(input).toBeInTheDocument();
    });

    it('has different name and id when it is provided', () => {
        const { getByLabelText } = render(<TestContainer id="id" />);
        const input = getByLabelText('Email');

        expect(input.name).toBe('name');
        expect(input.id).toBe('id');
    });

    it('radio', () => {
        const { getByLabelText } = render(<TestContainer radio />);
        const input = getByLabelText('Email');

        expect(input.type).toBe('radio');
    });
});
