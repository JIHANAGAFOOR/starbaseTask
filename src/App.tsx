import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Layout from "./components/layout/Layout";
import Users from "./pages/Users";
import Settings from "./pages/Settings";


const App = () => {
  return (
    <Routes>
      
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />

        </Route>
      </Route>

      {/* Redirect from root to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Fallback for undefined routes */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
