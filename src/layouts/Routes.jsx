import {
    createBrowserRouter
} from "react-router-dom";
import Roots from "../Root/Roots";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FoodDetails from "../pages/FoodDetails";
import PrivateDetailsRoute from "../components/PrivateDetailsRoute";
import AddFood from "../pages/AddFood";
import AvailabeFood from "../pages/AvailabeFood";
import ManageMyFood from "../pages/ManageMyFood";
import MyListCardUpdate from "../pages/MyListCardUpdate";
import AvailableFoodViewDetails from "../pages/AvailableFoodViewDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: '/food/:id',
                element: <PrivateDetailsRoute>
                    <FoodDetails></FoodDetails>
                </PrivateDetailsRoute>,

            },
            {
                path: '/availableFood/:id',
                element: <PrivateDetailsRoute>
                    <AvailableFoodViewDetails></AvailableFoodViewDetails>
                </PrivateDetailsRoute>,

            },
            {
                path: "/addFood",
                element: <PrivateDetailsRoute>
                    <AddFood></AddFood>
                </PrivateDetailsRoute>,
            },
            {
                path: "/manageMyFood",
                element: <PrivateDetailsRoute>
                    <ManageMyFood></ManageMyFood>
                </PrivateDetailsRoute>,
                loader: () => fetch('http://localhost:5000/userData')
            },
            {
                path: '/myListCardUpdate/:id',
                element: <PrivateDetailsRoute>
                    <MyListCardUpdate></MyListCardUpdate>
                </PrivateDetailsRoute>

                ,

            },
            {
                path: "/availableFoods",
                element: <AvailabeFood></AvailabeFood>,
                loader: () => fetch('http://localhost:5000/userData')

            },

            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
]);

export default router;