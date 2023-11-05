import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import AllFoodItems from "../pages/AllFoodItems/AllFoodItems";
import Blog from "../pages/Blog/Blog";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/allFoodItems",
                element: <AllFoodItems></AllFoodItems>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
]);
export default router;