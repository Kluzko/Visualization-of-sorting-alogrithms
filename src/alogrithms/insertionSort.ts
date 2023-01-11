import { delay } from '../utils'

export const insertionSort = async (data: number[], updateBars: (counter: number) => void) => {
    for (let i = 1; i < data.length; i++) {
        let curr = data[i]
        let j = i - 1
        // if left val is bigger than current swap them and swap unitl it is the condition is false
        while (j >= 0 && data[j] > curr) {
            data[j + 1] = data[j]
            j--
        }
        // insert curr elem to the correct pos
        data[j + 1] = curr
        updateBars(i)
        await delay(1)
    }
}
