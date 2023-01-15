export const getComplexity = (sortingAlgorithmName: SortingAlgorithms) => {
    switch (sortingAlgorithmName) {
        case 'bubble-sort':
            return { time: `O(n^2)`, space: `O(1)` }
        case 'selection-sort':
            return { time: `O(n^2)`, space: `O(1)` }
        case 'insertion-sort':
            return { time: `O(n^2)`, space: `O(1)` }
        case 'merge-sort':
            return { time: `O(n log n)`, space: `O(n)` }
        case 'quick-sort':
            return { time: `O(n log n)`, space: `O(log n)` }
        default:
            throw new Error(`Invalid sorting algorithm: ${sortingAlgorithmName}`)
    }
}
