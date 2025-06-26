import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// import Header from "../../components/infrastructure/Header";

export default function RootLayout() {
  return (
    <section className="flex w-full bg-[#FAFAFA]">
      <Sidebar />
      <main className="w-full">
        <div className="mx-10 my-6">
          <Outlet />
        </div>
      </main>
    </section>
  );
}
