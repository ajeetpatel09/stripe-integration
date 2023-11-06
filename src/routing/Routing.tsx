import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import SignUp from "../components/signup/SignUp";
import Login from "../components/login/Login";
import Products from "../components/products/Products";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/products',
        element: <Products/>
    }
])

function Routing() {
    return <RouterProvider router={router}/>
}

export default Routing;