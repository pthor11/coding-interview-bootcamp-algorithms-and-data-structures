export const maxChar = (str: string) => {
    const arr = str.split('').filter((each: string) => each !== ' ')
    const chars = {} as any
    let found: { char: string | undefined, count: number } = { char: undefined, count: 0 }
    for (const each of arr) {
        chars[each] = chars[each] + 1 || 1
        found = found.char ? (found.count < chars[each] ? {char: each, count: chars[each]} : found) : {char: each, count: 1}
    }
    return found.char
}