import React, { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import Input from './Input';
import '@testing-library/jest-dom/extend-expect';

const TestContainer = props => {
    const [value, setValue] = useState('');

    return <Input value={value} onChange={e => setValue(e.target.value)} name="name" label="Email" {...props} />;
};

describe('Component - Input', () => {
    it('onChange method', () => {
        const { getByLabelText } = render(<TestContainer />);
        const input = getByLabelText('Email');

        expect(input.value).toBe('');

        const fakeEvent = {
            target: {
                value: 'newValue',
            },
        };
        fireEvent.change(input, fakeEvent);

        expect(input.value).toBe('newValue');
    });

    it('disabled', () => {
        const { getByLabelText } = render(<TestContainer disabled />);
        const input = getByLabelText('Email');

        expect(input.disabled).toBe(true);
    });

    it('readOnly', () => {
        const { getByLabelText } = render(<TestContainer readOnly />);
        const input = getByLabelText('Email');

        expect(input.readOnly).toBe(true);
    });

    it('prints errors', () => {
        const { getByText } = render(<TestContainer errors={['Something is wrong']} />);
        const input = getByText('Something is wrong');

        expect(input).toBeInTheDocument();
    });

    it('has type', () => {
        const { getByLabelText } = render(<TestContainer type="password" />);
        const input = getByLabelText('Email');

        expect(input.type).toBe('password');
    });

    it('has same name and id', () => {
        const { getByLabelText } = render(<TestContainer type="password" />);
        const input = getByLabelText('Email');

        expect(input.name).toBe('name');
        expect(input.id).toBe('name');
    });

    it('has different name and id when it is provided', () => {
        const { getByLabelText } = render(<TestContainer id="id" type="password" />);
        const input = getByLabelText('Email');

        expect(input.name).toBe('name');
        expect(input.id).toBe('id');
    });

    it('renders color input', () => {
        const { queryByText, getByLabelText } = render(<TestContainer id="id" type="color" />);
        const input = getByLabelText('Email');

        const fakeEvent = {
            target: {
                value: '#0000ff',
            },
        };
        fireEvent.change(input, fakeEvent);

        expect(queryByText('#0000ff')).toBeInTheDocument();
    });

    it('renders select', () => {
        const { getByLabelText } = render(<TestContainer id="id" select options={[{ value: 0, label: 'Test' }]} />);
        const input = getByLabelText('Email');

        expect(input.tagName).toBe('SELECT');
    });
});
