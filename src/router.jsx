import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Blog from "./components/blog/Blog";
import Dashboard from "./pages/dashboard/Dashboard";

import ErrorPage from "./pages/errors/ErrorPage";
import NotFound from "./pages/errors/NotFound";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
