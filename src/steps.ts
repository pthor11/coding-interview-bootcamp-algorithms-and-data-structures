export const steps = (n: number): void => {
    for (let i = 1; i <= n; i++) {
        console.log(`'${new Array(i).fill('#').join('') + new Array(n - i).fill(' ').join('')}'\n`)
    }
}

steps(4)