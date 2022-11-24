import { AppShell, Footer, Header } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
  return (
    <AppShell header={<Header />} footer={<Footer />}>
      <RouterProvider router={router} />
    </AppShell>
  );
}
