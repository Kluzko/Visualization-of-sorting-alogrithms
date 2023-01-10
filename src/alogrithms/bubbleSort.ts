import { delay } from '../utils'

export const bubbleSort = async (
    data: number[],
    updateBars: (counter: number) => void,
    signal?: AbortSignal
) => {
    let swapsMade = true
    while (swapsMade) {
        if (signal && signal.aborted) {
            throw new DOMException('Aborted', 'AbortError')
        }
        swapsMade = false
        for (let i = 0; i < data.length - 1; i++) {
            if (data[i] > data[i + 1]) {
                const temp = data[i]
                data[i] = data[i + 1]
                data[i + 1] = temp
                swapsMade = true
                updateBars(i)
                await delay(1) // visualizaiton speed
            }
        }
    }
}
