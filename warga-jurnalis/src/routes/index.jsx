import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../pages/App";
import NewsForm from "../pages/NewsForm";
import Login from "../pages/LogIn";
import Register from "../pages/SignUp";
import NewsDetail from "../pages/NewsDetail";


export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
        },
        {
            path: '/news-form',
            element: <NewsForm />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Register />
        },
        {
            path: '/news/:id',
            element: <NewsDetail />
        },
    ])

    return(
        <RouterProvider router={router}/>
    )
}