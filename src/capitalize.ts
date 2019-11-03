export const capitalize = (str: string): string => {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

export const capitalize2 = (str: string): string => {
    return str.split('').map((char, i) => char = str[i - 1] === ' ' ? char.toUpperCase() : char).join('')
}