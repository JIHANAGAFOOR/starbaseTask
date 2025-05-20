import BarChartCard from "../components/charts/BarChartCard";
import LineChartCard from "../components/charts/LineChartCard";
import Card from "../components/ui/Card";
import stats from "../data/stat.json";
import userRegistration from "../data/userRegistration.json";
import activeUsersByRole from '../data/activeUsersByRole.json'

const Dashboard = () => {
  return (
    <div className="p-5">
      <h2 className="text-3xl  text-gray-900 dark:text-white mb-10">Dashboard</h2>
      <div className="flex flex-wrap gap-6 mb-8">
        <Card data={stats.pendingRequests} label={"Pending Request"} />
        <Card data={stats.sessions} label={"Session"} />
        <Card data={stats.users} label={"Users"} />
      </div>
      <div className="flex flex-wrap gap-6">
        <LineChartCard
          data={userRegistration}
          label="User Registrations Over Time"
          xAxisLabel="Month"
          yAxisLabel="Number of Registrations"
        />
        <BarChartCard
          data={activeUsersByRole}
          label="Active Users by Rolek"
          xAxisLabel="Role"
          yAxisLabel="Number of Active Users"
        />
      </div>
    </div>
  );
};

export default Dashboard;
