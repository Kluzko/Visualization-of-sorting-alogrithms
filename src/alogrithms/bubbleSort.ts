import { delay } from '../utils'

export const bubbleSort = async (data: number[], updateBars: (counter: number) => void) => {
    let swapsMade = true
    while (swapsMade) {
        swapsMade = false
        for (let i = 0; i < data.length - 1; i++) {
            if (data[i] > data[i + 1]) {
                // if left num is bigger than right num change places
                ;[data[i], data[i + 1]] = [data[i + 1], data[i]]
                swapsMade = true
                updateBars(i)
                await delay(1) // visualizaiton speed
            }
        }
    }
}
