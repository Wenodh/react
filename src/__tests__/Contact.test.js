import { screen, render } from '@testing-library/react';
import Contact from '../components/Contact';
import '@testing-library/jest-dom';

describe('Contact us page test cases', () => {
    test('Should load contact us component', () => {
        render(<Contact />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });

    test('Should load button inside contact us component', () => {
        render(<Contact />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    test('Should load input inside contact us component', () => {
        render(<Contact />);
        const input = screen.getByPlaceholderText('name');
        expect(input).toBeInTheDocument();
    });

    it('Should load 2 input on contact us component', () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole('textbox');
        expect(inputBoxes.length).toBe(2);
    });
});
