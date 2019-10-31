import { maxChar } from "../maxChar";

describe('given a string, return the character that is most commonly used in the string', () => {
    test('maxChar(abcccccd) === c', () => {
        expect(maxChar('abcccccd')).toBe('c')
    })

    test('maxChar(apple 12311111) === 1', () => {
        expect(maxChar('apple 12311111')).toBe('1')
    })
})