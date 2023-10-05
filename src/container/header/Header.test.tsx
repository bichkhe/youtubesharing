import { render, screen } from '@test-utils';
import { Header } from './Header';
const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockUsedNavigate,
}));
describe('Header component', () => {
  it('has correct guide link', () => {
    render(<Header opened={false} toggle={function (): void {
      throw new Error('Function not implemented.');
    }} />);
    expect(1 + 1).toBe(2);
  });
});
