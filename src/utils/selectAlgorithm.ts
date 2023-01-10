import { bubbleSort } from '../alogrithms'

type UpdateBarsFunctionType = (updateBars: (counter: number) => void) => Promise<void>

export const SelectAlgorithm = (
    data: number[],
    sortingAlgorithmName: SortingAlgorithms
): UpdateBarsFunctionType => {
    switch (sortingAlgorithmName) {
        case 'bubble-sort':
            return updateBars => bubbleSort(data, updateBars)
        default:
            throw new Error(`Invalid sorting algorithm: ${sortingAlgorithmName}`)
    }
}
