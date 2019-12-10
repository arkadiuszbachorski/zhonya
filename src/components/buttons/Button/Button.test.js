import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './Button';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Component - Button', () => {
    it('onClick action', () => {
        const fn = jest.fn();
        const { getByText } = render(<Button onClick={fn}>Click me</Button>);
        const button = getByText('Click me');
        fireEvent.click(button);
        expect(fn).toBeCalledTimes(1);
    });

    it('cannot be clicked when disabled', () => {
        const fn = jest.fn();
        const { getByText } = render(
            <Button disabled onClick={fn}>
                Click me
            </Button>,
        );
        const button = getByText('Click me');
        fireEvent.click(button);
        expect(fn).toBeCalledTimes(0);
    });

    it('renders as link with link prop', () => {
        const { getByText } = render(
            <Router>
                <Button link>Click me</Button>
            </Router>,
        );
        const button = getByText('Click me');
        expect(button.tagName).toBe('A');
    });
});
