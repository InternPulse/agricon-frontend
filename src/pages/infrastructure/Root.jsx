import { Outlet } from "react-router-dom";


export default function FacilityLayout() {
  return (
    <section className="flex w-full bg-[#FAFAFA]">
      <main className="w-full">
        <div className="mx-10 my-6">
          <Outlet />
        </div>
      </main>
    </section>
  );
}
