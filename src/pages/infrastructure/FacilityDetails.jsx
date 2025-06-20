import goldenGrains from "../../assets/goldenGrains.png";
import Facility from "../../components/infrastructure/Facility";

export default function FacilityDetails() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-12">
        <img
          src={goldenGrains}
          alt="Golden grains"
          className="max-w-[513px] w-full"
        />
        <div>
          <div className="flex justify-between items-center mb-1.75">
            <h2 className="font-bold text-[1.75rem] text-[#475367]">
              Golden Grains Dryer Station
            </h2>
            <p className="flex justify-center rounded-2xl bg-[#154E2426] p-1.5 w-[93px] text-sm text-[#19692E] font-medium">
              Available
            </p>
          </div>
          <p className="text-xl text-[#FFAC00] mb-1.75">Imota-Ikorodu, Lagos State, Nigeria</p>
          <p>
            This modern drying station in Ikorodu operates fuel-efficient grain
            dryers capable of handling up to 5 tonnes per cycle. Targeted at
            rice and maize farmers, the station offers precise temperature and
            humidity control, speeding up drying time while preserving grain
            quality for storage or sale.
          </p>
        </div>
      </div>

      <Facility />
    </div>
  );
}
