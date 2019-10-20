import { reverseString } from '../reverse_string';

test('short', () => {
    expect(reverseString('test')).toBe('tset');
});

test('long', () => {
    expect(reverseString('Life can only be understood backwards; but it must be lived forwards.')).toBe('.sdrawrof devil eb tsum ti tub ;sdrawkcab dootsrednu eb ylno nac efiL');
});