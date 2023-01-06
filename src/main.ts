import * as d3 from "d3";
import generateData from "./generateData";

const data = generateData(50);

// set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 40 },
  width = 800 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

const svg = d3
  .select(".visualization")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const rects = svg.selectAll("rect").data(data).enter().append("rect");

rects
  .attr("x", (_d, i) => i * (width / data.length))
  .attr("y", (d) => height - d)
  .attr("width", () => width / data.length - 1)
  .attr("height", (d) => d)
  .on("mouseover", function (_d, i) {
    d3.select(this.parentElement)
      .append("text")
      .text(i)
      .attr(
        "x",
        () => data.indexOf(i) * (width / data.length) + width / data.length / 2
      )
      .attr("y", height - i - 20)
      .attr("font-size", "14px")
      .attr("fill", "blue")
      .attr("text-anchor", "middle");

    d3.select(this).style("opacity", 0.85);
  })
  .on("mouseleave", function () {
    d3.select(this.parentElement).select("text").remove();

    d3.select(this).style("opacity", 1);
  });

export {};
