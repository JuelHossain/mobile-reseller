import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/errors/ErrorPage";

import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
export default router;
