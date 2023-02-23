import { Navigate, Outlet, Route, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const ProtectedRoutes = ({ children }) => {

    const { user, fetchingSession } = useAuth()
    
    if (fetchingSession) return <div>Loading...</div>

    return user ? <Outlet/> : <Navigate to='/'/>
}   

export default ProtectedRoutes