import { Container } from "@mantine/core";
import { useState } from "react";
import Controllers from "./Controllers";
import Page1 from "./page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import SuccessPage from "./SuccessPage";

export default function ProductDetails(props) {
  const pages = [Page1, Page2, Page3, SuccessPage];
  const [pageIndex, setActivePage] = useState(0);
  const ActivePage = pages[pageIndex];
  const next = () => setActivePage((page) => page + 1);
  const prev = () => setActivePage((page) => page - 1);
  const showPrev = pageIndex > 0 && pageIndex < pages.length - 1;
  const showNext = pageIndex < pages.length - 1 && pageIndex >= 0;
  const showConfirm = pageIndex === pages.length - 2;
  const controllerProps = { next, prev, showNext, showPrev, showConfirm };

  return (
    <Container className="my-5 sm:my-10">
      <ActivePage {...props} />
      <Controllers {...controllerProps} />
    </Container>
  );
}
