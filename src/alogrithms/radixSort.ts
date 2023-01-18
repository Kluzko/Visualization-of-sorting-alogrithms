import { delay } from '../utils'

export const radixSort = async (data: number[], updateBars: (counter: number) => void) => {
    let max = Math.max(...data)
    let count: number[] = new Array(10).fill(0)

    let output: number[] = new Array(data.length)
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        for (let i = 0; i < 10; i++) count[i] = 0

        // counting occurrences of each digit
        for (let i = 0; i < data.length; i++) {
            count[Math.floor((data[i] / exp) % 10)]++
        }

        // changing count[i] so that count[i] now contains actual
        // position of this digit in output array
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1]
        }

        // building the output array
        for (let i = data.length - 1; i >= 0; i--) {
            output[count[Math.floor((data[i] / exp) % 10)] - 1] = data[i]
            count[Math.floor((data[i] / exp) % 10)]--
        }

        // copying the output array to data[], so that data[] now
        // contains sorted numbers according to current digit
        for (let i = 0; i < data.length; i++) {
            data[i] = output[i]
            updateBars(i)
            await delay(1)
        }
    }
}
