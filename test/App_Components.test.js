import { expect } from'chai';
import { render, screen } from'@testing-library/react';
import App from'../src/App.jsx';


describe('Home page', function () {
    describe('navigation bar', function () {
        it('logo should render on the left side', function () {
            render(<App />);
            expect(screen.getByText('Jaaaming Logo')).to.exist;
        })
    }) 
})