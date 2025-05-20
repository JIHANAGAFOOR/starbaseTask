import { useAppSelector } from "../../store/slice/auth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    // If token doesn't exist or is falsy, redirect to login
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
