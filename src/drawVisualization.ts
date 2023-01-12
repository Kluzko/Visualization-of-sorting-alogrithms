import * as d3 from 'd3'
import {
    CHART_HEIGHT,
    CHART_MARGIN,
    CHART_WIDTH,
    RESET_BUTTON,
    SELECT_DATA_SIZE,
    SELECT_SORTING_ALGORITHM,
    START_BUTTON,
} from './constants'
import { SelectAlgorithm } from './utils'

const drawVisualization = (data: number[], algorithmType: SortingAlgorithms) => {
    // If it is .visualization del it first
    d3.select('.visualization').selectAll('rect').remove()
    d3.select('.visualization').select('svg').remove()

    const svg = d3
        .select('.visualization')
        .append('svg')
        .attr('width', CHART_WIDTH)
        .attr('height', CHART_HEIGHT)
        .attr('transform', 'translate(' + CHART_MARGIN.left + ',' + CHART_MARGIN.top + ')')

    // Create a bar chart using the data
    const barPadding = 1
    const barWidth = CHART_WIDTH / data.length - 1
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (_d, i) => i * (barWidth + barPadding))
        .attr('y', d => CHART_HEIGHT - d)
        .attr('width', barWidth)
        .attr('height', d => d)
        .on('mouseover', function (_d, i) {
            d3.select(this.parentElement)
                .append('text')
                .text(i)
                .attr('x', () => data.indexOf(i) * (barWidth + barPadding) + barWidth / 2)
                .attr('y', CHART_HEIGHT - i - 20)
                .attr('font-size', '14px')
                .attr('fill', 'blue')
                .attr('text-anchor', 'middle')

            d3.select(this).style('opacity', 0.85)
        })
        .on('mouseleave', function () {
            d3.select(this.parentElement).select('text').remove()

            d3.select(this).style('opacity', 1)
        })

    const updateBars = (counter: number) => {
        const bars = svg.selectAll<SVGRectElement, number>('rect').data(data)

        const update = (selection: d3.Selection<SVGRectElement, number, d3.BaseType, unknown>) => {
            selection
                .style('fill', (_d, i) => (i === counter || i === counter + 1 ? 'red' : 'blue'))
                .attr('x', (_d, i) => i * (barWidth + barPadding))
                .attr('y', d => CHART_HEIGHT - d)
                .attr('height', d => d)
        }

        // Apply the update function to the bars selection
        bars.call(update)
        // Handle any new data
        bars.enter()
            .append('rect')
            .attr('x', (_d, i) => i * (barWidth + barPadding))
            .attr('y', CHART_HEIGHT)
            .attr('width', barWidth)
            .attr('height', 0)
            .call(update)

        // Handle any removed data elements
        bars.exit().remove()
    }

    let sortingInProgress = false

    START_BUTTON.addEventListener('click', async () => {
        if (sortingInProgress) {
            console.log('stoped')
            return
        }
        sortingInProgress = true
        START_BUTTON.disabled = true
        SELECT_DATA_SIZE.disabled = true
        SELECT_SORTING_ALGORITHM.disabled = true

        const sort = SelectAlgorithm(data, algorithmType)
        await sort(updateBars).then(() => {
            svg.selectAll('rect').style('fill', 'black')

            sortingInProgress = false
            START_BUTTON.disabled = false
            SELECT_DATA_SIZE.disabled = false
            SELECT_SORTING_ALGORITHM.disabled = false
        })
    })
    // if reset i clicked while sorting is running take care with disableing button
    RESET_BUTTON.addEventListener('click', () => {
        START_BUTTON.disabled = false
        SELECT_DATA_SIZE.disabled = false
        SELECT_SORTING_ALGORITHM.disabled = false
    })
}

export default drawVisualization
