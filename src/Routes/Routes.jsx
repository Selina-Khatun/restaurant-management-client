import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import AllFoodItems from "../pages/AllFoodItems/AllFoodItems";
import Blog from "../pages/Blog/Blog";
import AddedFood from "../pages/Home/AddedFood/AddedFood";
import AddFood from "../pages/Home/AddFood/AddFood";
import OdderFood from "../pages/Home/OrderFood/OdderFood";
import Details from "../pages/AllFoodItems/Details";
import Purchase from "../pages/AllFoodItems/Purchase";
import PrivateRoute from "./PrivateRoute";


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
                path: "/addedFood",
                element: <PrivateRoute><AddedFood></AddedFood></PrivateRoute> 
            },
            {
                path: "/addAFood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: "/orderedFood",
                element: <OdderFood></OdderFood>
            },

            {
                path: "/allFoodItems",
                element: <AllFoodItems></AllFoodItems>
            },
            {
                path: "/details/:id",
                element:<Details></Details>
            },
            {
                path: "/purchase/:id",
                element:<PrivateRoute><Purchase></Purchase></PrivateRoute>
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