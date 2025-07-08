import { FaHome, FaTemperatureLow, FaWeightHanging, FaClock, FaCreditCard } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { assets } from "../../assets/assets";
// import "./facility.scss";

const features = [
  {
    title: "Facility Type",
    content: "Drying facility",
  },
  {
    title: "Capacity",
    content: "50,000 sq ft",
  },
  {
    title: "Operating Hours",
    content: "Mon - Sat 8:00 AM - 8:00 PM",
  },
  {
    title: "Farm Location",
    content: "Imota-Ikorodu, Lagos State, Nigeria",
  },
  {
    title: "Price",
    content: "₦2,000/ton/day",
  },
];

const iconMap = {
  "Facility Type": FaHome,
  "Climate Control": FaTemperatureLow,
  "Capacity": FaWeightHanging,
  "Operating Hours": FaClock,
  "Farm Location": MdLocationOn,
  "Price": FaCreditCard,
};

export default function FacilityDetails() {
  return (
    <div className="facility">
      <div className="facility__box">
        <img className="facility__image" src={assets.Frame} alt="Image" />
        <FacilityDescription />
      </div>
      <FacilityFeatures />
      <div className="center"> 
      <Button className="btn btn-center btn--green btn--w6" >Book Now</Button>
      </div>
    </div>
  );
}

function FacilityDescription() {
  return (
    <div className="facility__description">
      <h2>
        <span className="facility__title">Golden Grains Dryer Station</span>
        <span className="facility__status">Available</span>
      </h2>
      <p className="mb-2">Imota-Ikorodu, Lagos State, Nigeria</p>
      <p>
        This modern drying station in Ikorodu operates fuel-efficient
        grain dryers capable of handling up to 5 tonnes per cycle.
        Targeted at rice and maize farmers, the station offers precise
        temperature and humidity control, speeding up drying time while
        preserving grain quality for storage or sale.
      </p>
    </div>
  )
}

function FacilityFeatures() {
  return (
    <div className="facility__features">
      {features.map((feature, i) => (
        <Features key={i} title={feature.title} content={feature.content} />
      ))}
    </div>
  );
}

function Features({ title, content }) {
  const IconComponent = iconMap[title];

  return (
    <div className="feature">
      <span className="feature-icon">
        {IconComponent && <IconComponent />}
      </span>
      <h3 className="feature-title">{title}</h3>
      <p className="content">{content}</p>
    </div>
  );
}

export function Button({ className, type, children }) {
    return (
        <button className={className} type={type ? type : ""}>{children}</button>
    );
}

