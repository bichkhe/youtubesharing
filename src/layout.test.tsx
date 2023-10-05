import { render, screen } from '../test-utils';
import { Layout } from './layout';

describe('Layout Component', () => {
    it('first jest testing', () => {
        render(<Layout children={undefined} />);
        expect(1 + 1).toBe(2);
    });
});
