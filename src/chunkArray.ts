export const chunkArray = (arrray: any[], n: number): any[] => {
    const rounds: number = Math.ceil(arrray.length / n)
    const chunks = []
    for (let i = 0; i < rounds; i++) {
        const chunk = []
        for (let j = 0; j < n; j++) {
            if (i * n + j < arrray.length) {
                chunk.push(arrray[i * n + j])
            }
        }
        chunks.push(chunk)
    }
    return chunks
}