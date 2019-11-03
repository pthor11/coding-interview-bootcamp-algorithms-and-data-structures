import { anagrams } from "../anagrams";

test('anagrams', () => {
    expect(anagrams('rail safety', 'fairy tales')).toBe(true)
})