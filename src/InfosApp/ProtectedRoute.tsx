import { Navigate, Outlet } from "react-router-dom";
import { useUserData } from "./hooks/useUserData"

type ProtectedRouteProps = {
    redirect?: string;
}

export const ProtectedRoute = ({ redirect }: ProtectedRouteProps) => {
    const { email, isAuthorized } = useUserData();

    if (!isAuthorized) return <Navigate to={redirect || '/'} />

    return <Outlet />
}