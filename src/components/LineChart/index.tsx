"use client"
import React, { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, ChartData, registerables } from 'chart.js';

// Register all necessary components of Chart.js
Chart.register(...registerables);

interface LineChartProps {
  data: ChartData<'line', number[], string>;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<'line', number[], string> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const config: ChartConfiguration<'line', number[], string> = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  const value = tooltipItem.raw as number || 0;
                  return `$${value.toFixed(2)}`;
                },
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Month',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Amount',
              },
              ticks: {
                callback: (value) => `$${value}`,
              },
            },
          },
        },
      };

      chartInstance.current = new Chart(chartRef.current, config);
    }
  }, [data]);

  return <canvas ref={chartRef} className="w-full h-full" />;
};

export default LineChart;
