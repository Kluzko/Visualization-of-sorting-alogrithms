import generateData from "./generateData";
import drawVisualization from "./drawVisualization";
import * as d3 from "d3";

const dataSizeSelect = d3.select("#data-size");

const drawVisualizationOnLoad = () => {
  const dataSize = +dataSizeSelect.property("value");
  const data = generateData(dataSize);
  drawVisualization(data);
};

// draw on first load

drawVisualizationOnLoad();

// change if values are changed

dataSizeSelect.on("change", drawVisualizationOnLoad);

export {};
