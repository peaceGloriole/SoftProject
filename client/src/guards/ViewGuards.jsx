import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function ViewGuard() {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated
        ? <Outlet />
        :
        <div>
            <h1>Unauthorized</h1>
            <span>You must be logged in to view this page. Click<Link to="/login">here</Link></span>
            <span>If you don't have profile click <Link to="/register">here</Link></span>
        </div>
};