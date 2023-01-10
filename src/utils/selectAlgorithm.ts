import { bubbleSort } from '../alogrithms'

type UpdateBarsFunctionType = (
    updateBars: (counter: number) => void,
    signal?: AbortSignal
) => Promise<void>

export const SelectAlgorithm = (
    data: number[],
    sortingAlgorithmName: SortingAlgorithms
): UpdateBarsFunctionType => {
    switch (sortingAlgorithmName) {
        case 'bubble-sort':
            return (updateBars, signal) => bubbleSort(data, updateBars, signal)
        default:
            throw new Error(`Invalid sorting algorithm: ${sortingAlgorithmName}`)
    }
}
