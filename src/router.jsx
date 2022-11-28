import { LoadingOverlay } from "@mantine/core";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PrivateRoute from "./components/auth/PrivateRoute";
import Blog from "./components/blog/Blog";
import { useUserContext } from "./context/userContext";
import AdPage from "./pages/ad/AdPage";
import Dashboard from "./pages/dashboard/Dashboard";
import useDashboardLinks from "./pages/dashboard/links/useDashboardLinks";

import ErrorPage from "./pages/errors/ErrorPage";
import NotFound from "./pages/errors/NotFound";
import Home from "./pages/home/Home";
import BookingPage from "./pages/products/bookings/BookingPage";
import categories from "./pages/products/components/categories";
import MobilePhones from "./pages/products/mobile-phones/MobilePhones";
import Payments from "./pages/products/payments/Payments";
import PaymentSuccess from "./pages/products/payments/PaymentSuccess";
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
        {
          element: <PrivateRoute />,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
              children: dashboardRoutes,
            },
            { path: "products/booking/:id", element: <BookingPage /> },
            { path: "payment/:id", element: <Payments /> },
            { path: "payment-success", element: <PaymentSuccess /> },
            { path: "ad/:id", element: <AdPage /> },
            { path: "ad", element: <AdPage /> },
          ],
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
