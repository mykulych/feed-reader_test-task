import { BrowserRouter as Router, Navigate, Outlet, Routes, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { SignIn } from "../pages/signin"
import Cookies from "universal-cookie"

export const AppRoutes = () => {
    return <Router>
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route path="/" exact element={<Home />} />
            </Route>
            <Route element={<PublicRoutes />}>
                <Route path="/signin" element={<SignIn />} />
            </Route>
        </Routes>
    </Router>
}

const PrivateRoutes = () => {
    const cookies = new Cookies();
    const isAuth = cookies.get("auth");

    return isAuth ? <Outlet /> : <Navigate to="/signin" />
}

const PublicRoutes = () => {
    const cookies = new Cookies();
    const isAuth = cookies.get("auth");

    return isAuth ? <Navigate to="/" /> : <Outlet />
}