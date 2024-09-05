"use client";
import React, { PureComponent, useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";

interface DataPoint {
  name: string;
  Average: number;
  You: number;
}

interface CustomizedLabelProps {
  x?: number;
  y?: number;
  stroke?: string;
  value?: number | string;
}

class CustomizedLabel extends PureComponent<CustomizedLabelProps> {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text
        x={x}
        y={y}
        dy={-10}
        fill={stroke}
        fontSize={10}
        textAnchor="middle"
      >
        {value}
      </text>
    );
  }
}

interface CustomizedAxisTickProps {
  x?: number;
  y?: number;
  stroke?: string;
  payload?: {
    value: string;
  };
}

class CustomizedAxisTick extends PureComponent<CustomizedAxisTickProps> {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload?.value}
        </text>
      </g>
    );
  }
}

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded shadow-md">
        <p className="text-sm font-semibold">{`Name: ${payload[0].payload.name}`}</p>
        <p
          className="text-sm"
          style={{ color: payload[0].color }}
        >{`You: ${payload[0].value}`}</p>
        <p
          className="text-sm"
          style={{ color: payload[1].color }}
        >{`Average: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const PerformanceLineChart: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    fetch("/Reports.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    function responsiveChart() {
      if (window) {
        setWidth(window.innerWidth);
      }
    }
    responsiveChart();
    window.addEventListener("resize", responsiveChart);
    return () => window.removeEventListener("resize", responsiveChart);
  }, []);

  return (
    <div className="bg-white rounded-[10px] h-[30vh]">
      <LineChart
        width={width < 1024 ? width / 2 : width / 3}
        height={270}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis tick={false} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="You"
          stroke="#8884d8"
          label={<CustomizedLabel />}
        />
        <Line type="monotone" dataKey="Average" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default PerformanceLineChart;
