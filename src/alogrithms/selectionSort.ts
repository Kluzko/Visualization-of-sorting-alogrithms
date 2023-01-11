import { delay } from '../utils'

export const selectionSort = async (data: number[], updateBars: (counter: number) => void) => {
    let minIndex: number

    for (let i = 0; i < data.length - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < data.length; j++) {
            // comapre the current element with min element
            if (data[j] < data[minIndex]) {
                minIndex = j
            }
        }
        // swap the current element with the min element found
        ;[data[i], data[minIndex]] = [data[minIndex], data[i]]
        updateBars(i)
        await delay(1)
    }
}
