import { computeStats } from "../dataFunctions.js";
import data from "../data/dataset.js";

const dataComputed = computeStats(data);

google.charts.load("current", { packages: ["corechart"] });

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn("string", "Topping");
  data.addColumn("number", "Slices");
  data.addRows(dataComputed);

  const options = {
    title: "Type Books",
    width: 400,
    height: 300,
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}
export { drawChart };
