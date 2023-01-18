import { delay } from '../utils'

export const bucketSort = async (data: number[], updateBars: (counter: number) => void) => {
    let n = data.length
    let buckets: number[][] = []
    for (let i = 0; i < n; i++) {
        buckets[i] = []
    }

    let max = Math.max(...data)
    for (let i = 0; i < n; i++) {
        let index = Math.floor((data[i] / (max + 1)) * n)
        buckets[index].push(data[i])
    }

    for (let i = 0; i < n; i++) {
        buckets[i].sort()
    }

    let k = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            data[k++] = buckets[i][j]
            updateBars(k)
            await delay(1)
        }
    }
}
