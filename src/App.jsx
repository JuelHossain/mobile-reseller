import { ModalsProvider } from "@mantine/modals";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import AppHeader from "./components/header/Header";
import BookingModal from "./components/modals/bookingModal";
import AllModal from "./components/shared/AllModal";

export default function App() {
  return (
    <ModalsProvider modals={{ bookingModal: BookingModal }}>
      <div className="min-h-screen flex justify-between flex-col">
        <AppHeader />
        <div className=" flex flex-col mt-[8vh]">
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
        <Footer />
        <AllModal />
      </div>
    </ModalsProvider>
  );
}
