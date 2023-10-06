import { render, screen } from '@test-utils';
import { Logo } from './Logo';
const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockUsedNavigate,
}));
describe('Logo component', () => {
    it('should has Youtube Sharing in Logo', () => {
        render(<Logo />);
        expect(screen.getByText("Youtube Sharing")).toBeInTheDocument();
    });
});
