import generateData from "./generateData";
import drawVisualization from "./drawVisualization";
import * as d3 from "d3";

const dataSizeSelect = d3.select("#data-size");

dataSizeSelect.on("change", function () {
  const dataSize = +d3.select(this).property("value");
  const data = generateData(dataSize);
  drawVisualization(data);
});

export {};
