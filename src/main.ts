import { generateData } from './utils'
import drawVisualization from './drawVisualization'
import * as d3 from 'd3'
import { SORT_TIME, SPACE_COMPLEXITY, START_BUTTON, TIME_COMPLEXITY } from './constants'
import { getComplexity } from './utils/getComplexity'

const dataSizeSelect = d3.select('#data-size')
const algorithmTypeSelect = d3.select('#sorting-algorithm')
const resetValues = document.querySelector('.reset-btn') as HTMLButtonElement

let currentAlgorithmType: SortingAlgorithms | null = null
let currentDataSize: number | null = null

const drawVisualizationOnLoad = (isReset?: boolean) => {
    const dataSize = +dataSizeSelect.property('value')
    const algorithmType: SortingAlgorithms = algorithmTypeSelect.property('value')
    SORT_TIME.textContent = '0.00 s'
    START_BUTTON.disabled = false
    const shouldUpdateVisualization =
        currentAlgorithmType !== algorithmType || currentDataSize !== dataSize || isReset
    if (shouldUpdateVisualization) {
        currentDataSize = dataSize

        if (currentAlgorithmType !== algorithmType) {
            const { time, space } = getComplexity(algorithmType)
            SPACE_COMPLEXITY.textContent = space
            TIME_COMPLEXITY.textContent = time
        }

        currentAlgorithmType = algorithmType

        const data = generateData(dataSize)
        drawVisualization(data, algorithmType)
    }
}
//reshuffle the values
resetValues.addEventListener('click', () => {
    drawVisualizationOnLoad(true)
})

// draw on first load
drawVisualizationOnLoad()

// change if values are changed
dataSizeSelect.on('change', drawVisualizationOnLoad)
algorithmTypeSelect.on('change', drawVisualizationOnLoad)

export {}
