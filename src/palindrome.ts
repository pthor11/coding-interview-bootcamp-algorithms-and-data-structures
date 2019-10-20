export const palindrome = (str: string): boolean => {
    return str === str.split('').reduce((reversed: string, char: string) => char + reversed, '')
}