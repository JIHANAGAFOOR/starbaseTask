type activeUsers = {
  month: string;
  registrations: number;
};
type activeUsersByRole = {
  role: string;
  count: number;
};
export type chartsLineProps = {
  data: activeUsers[];
  label: string;
  xAxisLabel: string;
  yAxisLabel: string;
};

export type chartsBarProps = {
  data: activeUsersByRole[];
  label: string;
  xAxisLabel: string;
  yAxisLabel: string;
};
