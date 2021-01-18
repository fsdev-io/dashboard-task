import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import * as ChartGeo from "chartjs-chart-geo";
import GeoMapComponent from "./GeoMap";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const GeoMap = () => {
  const chartElement = useRef(null);
  const chart = useRef(null);

  useEffect(() => {
    fetch("https://unpkg.com/us-atlas/states-10m.json")
      .then((response) => response.json())
      .then((data) => {
        const nation = ChartGeo.topojson.feature(data, data.objects.nation)
          .features[0];
        const states = ChartGeo.topojson.feature(data, data.objects.states)
          .features;

        chart.current = new Chart(chartElement.current, {
          type: "choropleth",
          data: {
            labels: states.map((state) => state.properties.name),
            datasets: [
              {
                label: "States",
                outline: nation,
                data: states.map((d) => ({
                  feature: d,
                  value: Math.floor(Math.random() * 300000),
                })),
              },
            ],
          },
          options: {
            legend: {
              display: false,
            },
            tooltips: {
              callbacks: {
                label: ({ value }) => formatter.format(value),
              },
            },
            scales: {
              xy: {
                projection: "albersUsa",
              },
            },
          },
        });
      });
  }, []);

  const props = { chartElement };

  return <GeoMapComponent {...props} />;
};

export default GeoMap;
