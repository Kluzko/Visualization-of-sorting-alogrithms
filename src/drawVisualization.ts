import * as d3 from "d3";

const drawVisualization = (data: number[]) => {
  const margin = { top: 10, right: 10, bottom: 30, left: 10 };
  const width = 1200 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // If it is .visualization del it first
  d3.select(".visualization").selectAll("rect").remove();
  d3.select(".visualization").select("svg").remove();

  const svg = d3
    .select(".visualization")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Create a bar chart using the data
  const barPadding = 1;
  const barWidth = width / data.length - 1;
  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (_d, i) => i * (barWidth + barPadding))
    .attr("y", (d) => height - d)
    .attr("width", barWidth)
    .attr("height", (d) => d)
    .on("mouseover", function (_d, i) {
      d3.select(this.parentElement)
        .append("text")
        .text(i)
        .attr(
          "x",
          () => data.indexOf(i) * (barWidth + barPadding) + barWidth / 2
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

  const startButton = document.querySelector(
    ".run-sorting-btn"
  ) as HTMLButtonElement;

  function updateBars(counter: number) {
    // Select all the bars and bind them to the data
    const bars = svg.selectAll<SVGRectElement, number>("rect").data(data);

    // Define the update function
    const update = (
      selection: d3.Selection<SVGRectElement, number, d3.BaseType, unknown>
    ) => {
      selection
        .style("fill", (_d, i) =>
          i === counter || i === counter + 1 ? "red" : "blue"
        )
        .attr("x", (_d, i) => i * (barWidth + barPadding))
        .attr("y", (d) => height - d)
        .attr("height", (d) => d);
    };

    // Apply the update function to the bars selection
    bars.call(update);

    // Handle any new data elements by appending new bars
    bars
      .enter()
      .append("rect")
      .attr("x", (_d, i) => (i + counter) * (barWidth + barPadding))
      .attr("y", height)
      .attr("width", barWidth)
      .attr("height", 0)
      .call(update);

    // Handle any removed data elements by removing the corresponding bars
    bars.exit().remove();
  }

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async (data: number[], updateBars: Function) => {
    let swapsMade = true;
    while (swapsMade) {
      swapsMade = false;
      for (let i = 0; i < data.length - 1; i++) {
        if (data[i] > data[i + 1]) {
          const temp = data[i];
          data[i] = data[i + 1];
          data[i + 1] = temp;
          swapsMade = true;
          updateBars(i);
          await delay(1); // <--- adjust number of milliseconds as needed
        }
      }
    }
    svg.selectAll("rect").style("fill", "black");
  };

  startButton.addEventListener("click", () => {
    bubbleSort(data, updateBars);
  });
};

export default drawVisualization;
