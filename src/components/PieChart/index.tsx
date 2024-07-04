"use client";

import React, { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, ChartData, ChartType, registerables } from 'chart.js';

interface PieChartProps {
  data: ChartData<'pie', number[], string>;
}

// Register all necessary components of Chart.js
Chart.register(...registerables);

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<'pie', number[], string> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const config: ChartConfiguration<'pie', number[], string> = {
        type: 'pie',
        data: data,
        options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  const label = tooltipItem.label || '';
                  const value = tooltipItem.raw as number || 0;
                  const percentage = (
                    (value / data.datasets[0].data.reduce((a, b) => a + b, 0)) *
                    100
                  ).toFixed(2);
                  return `${label}: $${value.toFixed(2)} (${percentage}%)`;
                },
              },
            },
          },
        },
      };

      chartInstance.current = new Chart(chartRef.current, config);
    }
  }, [data]);

  return <canvas ref={chartRef} className="w-[240px] h-[240px]" />;
};

export default PieChart;
