import {
    Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { chartsBarProps } from "../../types/chart";



const BarChartCard = ({ data, label, xAxisLabel, yAxisLabel }: chartsBarProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 w-full lg:w-[48%] h-100">
      <h1 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white text-center">
        {label}
      </h1>
      <div className="h-[90%]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
            
              label={{ value: xAxisLabel, position: "bottom", offset: 0 }}
            />
            <YAxis
              label={{
                value: yAxisLabel,
                angle: -90,
                position: "insideLeft",
                dy: 100,
              }}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#4F46E5" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartCard;
