import { reverse_int } from "../reverse_int";

test('15 => 51', () => {
    expect(reverse_int(15)).toBe(51)
})

test('189 => 981', () => {
    expect(reverse_int(189)).toBe(981)
})

test('500 => 5', () => {
    expect(reverse_int(500)).toBe(5)
})

test('-15 => - 51', () => {
    expect(reverse_int(-15)).toBe(-51)
})