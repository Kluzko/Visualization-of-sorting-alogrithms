import { delay } from '../utils'

export const selectionSort = async (data: number[], updateBars: (counter: number) => void) => {
    let minIndex: number

    for (let i = 0; i < data.length - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < data.length; j++) {
            // comapre the current elem with min elem
            if (data[j] < data[minIndex]) {
                minIndex = j
            }
        }
        // swap the current elem with the min elem found
        ;[data[i], data[minIndex]] = [data[minIndex], data[i]]
        updateBars(i)
        await delay(1)
    }
}
