import { greet } from './greet';

describe('greet', () => {
    it('should include the name in the the o/p(message)', () => {
        expect(greet('hary')).toContain('hary');
    });
})