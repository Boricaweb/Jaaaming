import { expect } from 'chai';
import { render, screen } from '@testing-library/react';
import App from '../src/App.jsx';

describe('Test test render on screen', function () {
    it('should render "Jaaaming Logo"', function () {
        render(<App />);
        expect(screen.getByText('Jaaaming Logo')).to.equal('Jaaaming Logo');
    });
});