import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { chartsLineProps } from "../../types/chart";

const LineChartCard = ({
  data,
  label,
  xAxisLabel,
  yAxisLabel,
}: chartsLineProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 w-full lg:w-[48%] h-100">
      <h1 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white text-center">
        {label}
      </h1>
      <div className="h-[90%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              //   dataKey={xAxisLabel}
              label={{ value: xAxisLabel, position: "bottom", offset: 0 }}
            />
            <YAxis
              //   dataKey={yAxisLabel}
              label={{
                value: yAxisLabel,
                angle: -90,
                position: "insideLeft",
                dy: 100,
              }}
            />
            <Tooltip />
            {/* <Legend /> */}
            <Line
              type="monotone"
              dataKey="registrations"
              stroke="#4F46E5"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartCard;
