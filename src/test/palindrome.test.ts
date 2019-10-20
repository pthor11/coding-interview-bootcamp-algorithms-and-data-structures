import { palindrome } from '../palindrome';

test('true', () => {
    expect(palindrome('teet')).toBe(true);
});

test('false', () => {
    expect(palindrome('I did did i')).toBe(false);
});