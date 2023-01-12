import { bubbleSort, insertionSort, mergeSort, quickSort, selectionSort } from '../alogrithms'

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
        default:
            throw new Error(`Invalid sorting algorithm: ${sortingAlgorithmName}`)
    }
}
