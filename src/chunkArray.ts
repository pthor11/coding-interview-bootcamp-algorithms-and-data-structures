export const chunkArray = (array: any[], n: number): any[] => {
    const rounds: number = Math.ceil(array.length / n)
    const chunks = []
    for (let i = 0; i < rounds; i++) {
        const chunk = []
        for (let j = 0; j < n; j++) {
            if (i * n + j < array.length) {
                chunk.push(array[i * n + j])
            }
        }
        chunks.push(chunk)
    }
    return chunks
}

export const chunkArray2 = (array: any[], n: number): any[] => {
    let index = 0
    const chunks = []
    while (index < array.length) {
        chunks.push(array.slice(index, index + n))
        index += n
    }
    return chunks
}