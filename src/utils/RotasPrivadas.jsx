import { Navigate, Outlet } from "react-router"
import useAuthStore from "../stores/auth"

export function RotasPrivadas() {
    const token = useAuthStore((state) => state.token)

    if (token) return (<Outlet/>)

    return <Navigate to="/" replace/>
}