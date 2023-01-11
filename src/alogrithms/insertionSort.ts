import { delay } from '../utils'

export const insertionSort = async (data: number[], updateBars: (counter: number) => void) => {
    for (let i = 1; i < data.length; i++) {
        // Assign curr element as a key
        let curr = data[i]
        // Check the prev elements of key and move them one position ahead if they are greater than key
        let j = i - 1
        while (j >= 0 && data[j] > curr) {
            data[j + 1] = data[j]
            j--
        }
        // insert curr element to correct position
        data[j + 1] = curr
        updateBars(i)
        await delay(1)
    }
}
