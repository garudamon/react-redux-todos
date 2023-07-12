import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TodoPage from "views/Todo";
import SigninPage from "views/Signin";
import ErrorPage from "views/Error";
import {ProtectedRoute} from 'views/Protected'
import CenterLayout from "layouts/CenterContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><TodoPage /></ProtectedRoute>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <CenterLayout><SigninPage /></CenterLayout>,
    errorElement: <ErrorPage />,
  },
]);

const Routing = () => <RouterProvider router={router} />;

export default Routing;
