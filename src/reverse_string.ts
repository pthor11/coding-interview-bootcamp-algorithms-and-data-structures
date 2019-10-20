export const reverseString = (str: string): string => {
    return str.split('').reduce((reversed: string, char: string) => char + reversed, '')
}