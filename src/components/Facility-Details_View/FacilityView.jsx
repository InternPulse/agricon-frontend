import {
  FaHome,
  FaTemperatureLow,
  FaWeightHanging,
  FaClock,
  FaPlug,
  FaCreditCard,
} from "react-icons/fa";

export default function FacilityDetails() {
  return (
    <div>
      <div>
        {/* Image */}
        <img />
        {/* Title + Location + Status */}
        <div>
          <div>
            <h2>Golden Grains Dryer Station</h2>
            <p>Imota-Ikorodu, Lagos State, Nigeria</p>
            <p>
              This modern drying station in Ikorodu operates fuel-efficient
              grain dryers capable of handling up to 5 tonnes per cycle.
              Targeted at rice and maize farmers, the station offers precise
              temperature and humidity control, speeding up drying time while
              preserving grain quality for storage or sale.
            </p>
          </div>
          <span>
            Available
          </span>
        </div>
      </div>
    </div>
  );
}
