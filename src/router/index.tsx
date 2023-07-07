import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TodoPage from '../pages/Todo'
import LoginPage from '../pages/Login'
import ErrorPage from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
]);


const Routing = () => <RouterProvider router={router} />

export default Routing;