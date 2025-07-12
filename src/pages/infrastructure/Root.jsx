import { Outlet } from "react-router-dom";
import FacilityProvider from "../../components/infrastructure/FacilityContext";


export default function FacilityLayout() {
  return (
    <section className="flex w-full bg-[#FAFAFA]">
      <main className="w-full">
        <div className="mx-10 my-6">
          <FacilityProvider>
            <Outlet />
          </FacilityProvider>
        </div>
      </main>
    </section>
  );
}
