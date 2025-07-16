import { Outlet } from "react-router-dom";
import FacilityProvider from "../../components/infrastructure/FacilityContext";


export default function FacilityLayout() {
  return (
    <section className="flex w-full bg-[#FAFAFA] mt-20">
      <main className="w-full">
        <div className="mx-5 my-6">
          <FacilityProvider>
            <Outlet />
          </FacilityProvider>
        </div>
      </main>
    </section>
  );
}
