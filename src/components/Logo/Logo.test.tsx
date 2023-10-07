

import { render, screen } from '@test-utils';
import { Logo } from './Logo';
import { BrowserRouter, Link } from 'react-router-dom';
import { MemoryRouter } from "react-router-dom";

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockUsedNavigate,
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Use the actual implementation for other functions
    useNavigation: () => ({
        navigate: jest.fn(),
        // Add other mock properties or functions you need for your test
    }),
}));
describe('Logo component', () => {
    it('should has Youtube Sharing Text', () => {
        render(
            <Logo />
        );
        expect(screen.getByText("Youtube Sharing")).toBeInTheDocument();
    });
});


describe('Logo component', () => {
    it('should has a link is callable ', () => {
        render(<Logo />);
        // Find the link by its data-testid attribute
        const linkElement = screen.getByTestId('link-home');
        // Assert that the link element is present
        expect(linkElement).toBeInTheDocument();
    });
});

// describe('Logo component', () => {
//     it('should routing to Home Page when clicking to logo', () => {
//         render(<Logo />);
//         expect(screen.findAllByTestId("link-home")).toBeCalled()
//     });
// });
