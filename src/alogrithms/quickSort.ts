import { delay } from '../utils'

const partition = async (
    data: number[],
    low: number,
    height: number,
    updateBars: (counter: number) => void
) => {
    let pivot = data[height]

    let i = low - 1

    for (let j = low; j <= height - 1; j++) {
        if (data[j] < pivot) {
            i++
            //swap elements
            ;[data[i], data[j]] = [data[j], data[i]]
            updateBars(j)
            await delay(1)
        }
    }
    ;[data[i + 1], data[height]] = [data[height], data[i + 1]]
    updateBars(height)
    await delay(1)
    return i + 1
}

const quickSortHelper = async (
    arr: number[],
    low: number,
    high: number,
    updateBars: (counter: number) => void
) => {
    if (low < high) {
        let pi = await partition(arr, low, high, updateBars)
        await Promise.all([
            quickSortHelper(arr, low, pi - 1, updateBars),
            quickSortHelper(arr, pi + 1, high, updateBars),
        ])
    }
}

export const quickSort = async (data: number[], updateBars: (counter: number) => void) => {
    await quickSortHelper(data, 0, data.length - 1, updateBars)
}
