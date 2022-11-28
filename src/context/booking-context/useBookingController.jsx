import { useState } from "react";
import Page2 from "../../pages/products/bookings/pages/Page2";
import Page3 from "../../pages/products/bookings/pages/Page3";
import { useBookingFormContext } from "./bookingFormContext";

export default function useBookingController() {
  const { alreadyBooked } = useBookingFormContext();

  const pages = [Page2, Page3];
  const [pageIndex, setActivePage] = useState(0);
  const ActivePage = pages[pageIndex];
  const next = () => setActivePage((page) => page + 1);
  const prev = () => setActivePage((page) => page - 1);
  const showPrev = pageIndex > 0 && pageIndex < pages.length;
  let showNext = pageIndex < pages.length && pageIndex >= 0;
  const showConfirm = pageIndex === pages.length - 1;
  if (alreadyBooked && showConfirm) showNext = false;
  const controllerProps = { next, prev, showNext, showPrev, showConfirm, pageIndex };
  return { ActivePage, controllerProps };
}
