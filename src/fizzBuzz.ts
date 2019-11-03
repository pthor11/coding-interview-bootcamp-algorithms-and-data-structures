export const fizzBuzz = (n: number) => {
    let result: string = ''
    for (let i = 1; i <= n; i++) {
        result += `${i % 15 === 0 ? 'fizzbuzz': (i % 3 === 0 ? 'fizz' : ( i % 5 === 0 ? 'buzz' : i))}`
    }
    return result
}

console.log(fizzBuzz(20))