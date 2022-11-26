import { LoadingOverlay } from "@mantine/core";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Blog from "./components/blog/Blog";
import { useUserContext } from "./context/userContext";
import Dashboard from "./pages/dashboard/Dashboard";
import useDashboardLinks from "./pages/dashboard/links/useDashboardLinks";

import ErrorPage from "./pages/errors/ErrorPage";
import NotFound from "./pages/errors/NotFound";
import Home from "./pages/home/Home";
import BookingPage from "./pages/products/bookings/BookingPage";
import categories from "./pages/products/components/categories";
import MobilePhones from "./pages/products/mobile-phones/MobilePhones";
import Products from "./pages/products/Products";

const useRouter = () => {
  const { userLoading } = useUserContext();
  const dashboardLinks = useDashboardLinks();
  const mobilePhones = categories.map((item, index) => {
    const { link } = item;
    return { index: index === 0, path: link, element: <MobilePhones {...item} /> };
  });

  const dashboardRoutes = dashboardLinks.map((item, index) => {
    const { link, element } = item;
    return { index: index === 0, path: link, element };
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
        { path: "products/booking/:id", element: <BookingPage /> },

        {
          path: "dashboard",
          element: <Dashboard />,
          children: dashboardRoutes,
        },
        {
          path: "blog",
          element: <Blog />,
        },
      ],
    },
    {
      path: "*",
      element: userLoading ? <LoadingOverlay visible /> : <NotFound />,
    },
  ]);
  return router;
};
export default useRouter;
