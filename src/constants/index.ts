export const CHART_MARGIN = { top: 30, right: 10, bottom: 30, left: 10 }
export const CHART_WIDTH = 900 - CHART_MARGIN.left - CHART_MARGIN.right
export const CHART_HEIGHT = 550 - CHART_MARGIN.top - CHART_MARGIN.bottom

export const [SELECT_SORTING_ALGORITHM, SELECT_DATA_SIZE, RESET_BUTTON, START_BUTTON] = [
    document.querySelector('#sorting-algorithm') as HTMLSelectElement,
    document.querySelector('#data-size') as HTMLSelectElement,
    document.querySelector('.reset-btn') as HTMLButtonElement,
    document.querySelector('.run-sorting-btn') as HTMLButtonElement,
]
