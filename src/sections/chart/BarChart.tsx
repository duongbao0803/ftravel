import React from "react";
import { Bar } from "react-chartjs-2";
import Chart, { ChartData, CategoryScale } from "chart.js/auto";
Chart.register(CategoryScale);

interface BarChartProps {
  chartData: ChartData<"bar">;
}

const BarChart: React.FC<BarChartProps> = (props) => {
  const { chartData } = props;
  return (
    <>
      <div className="w-full">
        <Bar data={chartData} options={{}} />
      </div>
    </>
  );
};

export default BarChart;
