import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../../components/infrastructure/Header";
import FacilityProvider from "../../components/infrastructure/FacilityContext";

export default function RootLayout() {
  return (
    <section className="flex w-full bg-[#FAFAFA]">
      <Sidebar />
      <main className="w-full">
        <Header />
        <div className="mx-10 my-6">
          <FacilityProvider>
            <Outlet />
          </FacilityProvider>
        </div>
      </main>
    </section>
  );
}
