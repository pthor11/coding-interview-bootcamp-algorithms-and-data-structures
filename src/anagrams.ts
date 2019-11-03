export const anagrams = (strA: string, strB: string): boolean => {
    const aCharMap = buildCharMap(strA)
    const bCharMap = buildCharMap(strB)

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false
    }

    for (const char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false
        }
    }

    return true
}

function buildCharMap(str: string) {
    const charMap: any = {}
    for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}