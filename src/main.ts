import { generateData } from './utils'
import drawVisualization from './drawVisualization'
import * as d3 from 'd3'

const dataSizeSelect = d3.select('#data-size')
const algorithmTypeSelect = d3.select('#sorting-algorithm')
const resetValues = document.querySelector('.reset-btn') as HTMLButtonElement

const drawVisualizationOnLoad = () => {
    const dataSize = +dataSizeSelect.property('value')
    const algorithmType: SortingAlgorithms = algorithmTypeSelect.property('value')
    console.log(algorithmType)
    const data = generateData(dataSize)
    drawVisualization(data, algorithmType)
}

//reshuffle the values
resetValues.addEventListener('click', () => {
    drawVisualizationOnLoad()
})

// draw on first load
drawVisualizationOnLoad()

// change if values are changed
dataSizeSelect.on('change', drawVisualizationOnLoad)
algorithmTypeSelect.on('change', drawVisualizationOnLoad)

export {}
