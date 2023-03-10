import {
    bubbleSort,
    bucketSort,
    insertionSort,
    mergeSort,
    quickSort,
    radixSort,
    selectionSort,
} from '../alogrithms'

type UpdateBarsFunctionType = (updateBars: (compared: number) => void) => Promise<void>

export const SelectAlgorithm = (
    data: number[],
    sortingAlgorithmName: SortingAlgorithms
): UpdateBarsFunctionType => {
    switch (sortingAlgorithmName) {
        case 'bubble-sort':
            return updateBars => bubbleSort(data, updateBars)
        case 'selection-sort':
            return updateBars => selectionSort(data, updateBars)
        case 'insertion-sort':
            return updateBars => insertionSort(data, updateBars)
        case 'merge-sort':
            return updateBars => mergeSort(data, updateBars)
        case 'quick-sort':
            return updateBars => quickSort(data, updateBars)
        case 'radix-sort':
            return updateBars => radixSort(data, updateBars)
        case 'bucket-sort':
            return updateBars => bucketSort(data, updateBars)
        default:
            throw new Error(`Invalid sorting algorithm: ${sortingAlgorithmName}`)
    }
}
