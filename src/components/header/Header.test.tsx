import { render, screen } from '@test-utils';
import { Header } from './Header';

describe('Header component', () => {
  it('has correct guide link', () => {
    render(<Header />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://youtubesharing.rustpanic.vn'
    );
  });
});
