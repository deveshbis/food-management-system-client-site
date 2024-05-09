import {
    createBrowserRouter
  } from "react-router-dom";
import Roots from "../Root/Roots";
import ErrorPage from "../pages/ErrorPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <ErrorPage></ErrorPage>
    },
  ]);

  export default router;