import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Blog from "./components/blog/Blog";
import Dashboard from "./pages/dashboard/Dashboard";

import ErrorPage from "./pages/errors/ErrorPage";
import NotFound from "./pages/errors/NotFound";
import Home from "./pages/home/Home";
import categories from "./pages/products/components/categories";
import MobilePhones from "./pages/products/components/MobilePhones";
import Products from "./pages/products/Products";

const useRouter = () => {
  const mobilePhones = categories.map((item) => {
    const { label, link } = item;
    if (label === "budget") return { index: true, element: <MobilePhones {...item} /> };
    return { path: link, element: <MobilePhones {...item} /> };
  });

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
          children: mobilePhones,
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
  return router;
};
export default useRouter;
