import React, { useRef, useEffect } from "react";
import Chart from "chart.js";
import ProductionComponent from "./Production";

// better data generation demonstrated in Cards
const generateData = (factor) =>
  [...Array(30)].map(() => Math.floor(Math.random() * factor));

const Production = () => {
  const chartElement = useRef(null);
  const chart = useRef(null);

  useEffect(() => {
    chart.current = new Chart(chartElement.current, {
      type: "bar",
      data: {
        labels: [...Array(30).keys()],
        datasets: [
          {
            type: "line",
            pointRadius: 0,
            label: "Profit margin",
            fill: false,
            borderColor: "#7d8798",
            data: [...Array(30)].map(() => Math.floor(Math.random() * 10 + 35)),
          },
          {
            label: "2nd grade",
            backgroundColor: "#59C9A5",
            borderColor: "#59C9A5",
            data: generateData(15),
          },
          {
            label: "1st grade",
            backgroundColor: "#56E39F",
            borderColor: "#56E39F",
            data: generateData(70),
          },
          {
            label: "Wasted",
            backgroundColor: "#EF6F6C",
            borderColor: "#EF6F6C",
            data: generateData(-10),
          },
        ],
      },

      options: {
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    });
  });

  const props = { chartElement };

  return <ProductionComponent {...props} />;
};

export default Production;
