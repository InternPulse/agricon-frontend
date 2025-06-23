import { Outlet } from "react-router-dom";
import Header from "../../components/infrastructure/Header";

export default function FacilityLayout() {
  return (
    <section className="flex w-full bg-[#FAFAFA]">
      <main className="w-full">
        <Header />
        <div className="mx-10 my-6">
          <Outlet />
        </div>
      </main>
    </section>
  );
}
