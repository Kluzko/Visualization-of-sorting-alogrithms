import { delay } from '../utils'

const merge = async (
    data: number[],
    left: number,
    middle: number,
    right: number,
    updateBars: (counter: number) => void
) => {
    let leftIndex = left
    let rightIndex = middle + 1
    let resultIndex = 0

    const result = new Array(right - left + 1)

    // Merge the two subarrays  into one
    while (leftIndex <= middle && rightIndex <= right) {
        if (data[leftIndex] < data[rightIndex]) {
            result[resultIndex++] = data[leftIndex++]
        } else {
            result[resultIndex++] = data[rightIndex++]
        }
    }

    // if any add remaining elements from left array
    while (leftIndex <= middle) {
        result[resultIndex++] = data[leftIndex++]
    }

    // if any add remaining elements from right array
    while (rightIndex <= right) {
        result[resultIndex++] = data[rightIndex++]
    }
    // copy sorted elements back to orginal array
    for (let i = 0; i < result.length; i++) {
        data[left + i] = result[i]
        updateBars(i)
        await delay(1)
    }
}

const mergeSortHelper = async (
    data: number[],
    left: number,
    right: number,
    updateBars: (counter: number) => void
) => {
    if (left === right) {
        return
    }

    const middle = Math.floor((left + right) / 2)
    // recursively sort left and right subarrays
    await Promise.all([
        mergeSortHelper(data, left, middle, updateBars),
        mergeSortHelper(data, middle + 1, right, updateBars),
    ])
    // merge the two subarrays
    await merge(data, left, middle, right, updateBars)
}

export const mergeSort = async (data: number[], updateBars: (counter: number) => void) => {
    await mergeSortHelper(data, 0, data.length - 1, updateBars)
}
