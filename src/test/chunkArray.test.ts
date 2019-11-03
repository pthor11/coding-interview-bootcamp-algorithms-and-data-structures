import { chunkArray } from "../chunkArray";

test('chunkArray', () => {
    expect(chunkArray([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]])
})

test('chunkArray', () => {
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
})

test('chunkArray', () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
})