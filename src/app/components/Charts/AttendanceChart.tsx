"use client";
import {
  ArcElement,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Plugin,
  Tooltip,
} from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const AttendanceChart: React.FC = () => {
  const data = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "Attendance",
        data: [90, 30],
        backgroundColor: ["#22c55e", "#D5D0CB"],
        borderColor: ["#22c55e", "#D5D0CB"],
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "80%",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  const textCenter: Plugin<"doughnut"> = {
    id: "textCenter",
    beforeDatasetsDraw(chart) {
      const { ctx, data } = chart;
      if (!ctx) return;

      ctx.save();
      ctx.font = "bold 20px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const val1 = data.datasets[0].data[0] as number;
      const val2 = data.datasets[0].data[1] as number;
      const sum = val1 + val2;

      const { width, height } = chart;
      const x = width / 2;
      const y = height / 2;

      ctx.fillText(`${val1} of ${sum}`, x, y);
      ctx.restore();
    },
  };

  return (
    <div className="h-[30vh] p-[20px]">
      <Doughnut data={data} options={options} plugins={[textCenter]} />
    </div>
  );
};

export default AttendanceChart;
