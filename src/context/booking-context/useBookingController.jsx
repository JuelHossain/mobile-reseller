import { useState } from "react";
import Page1 from "../../pages/products/bookings/pages/page1";
import Page2 from "../../pages/products/bookings/pages/Page2";
import Page3 from "../../pages/products/bookings/pages/Page3";
import SuccessPage from "../../pages/products/bookings/pages/SuccessPage";

export default function useBookingController() {
  const pages = [Page1, Page2, Page3, SuccessPage];
  const [pageIndex, setActivePage] = useState(0);
  const ActivePage = pages[pageIndex];
  const next = () => setActivePage((page) => page + 1);
  const prev = () => setActivePage((page) => page - 1);
  const showPrev = pageIndex > 0 && pageIndex < pages.length - 1;
  const showNext = pageIndex < pages.length - 1 && pageIndex >= 0;
  const showConfirm = pageIndex === pages.length - 2;
  const controllerProps = { next, prev, showNext, showPrev, showConfirm };
  return { ActivePage, controllerProps };
}
