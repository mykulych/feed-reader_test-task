
import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
import { SignIn } from "./pages/signin"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/signin",
        element: <SignIn />
    }
])

export {router}