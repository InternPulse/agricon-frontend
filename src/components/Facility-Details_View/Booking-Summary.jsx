import { assets } from "../../assets/assets";
import Button from "../Button";

const items = [
    {
        id: 1,
        image: assets.frame1,
        alt: "Facility Storage",
        title: "Cold Room Facility Storage",
        price: "1,500",
        quantity: "5 days"
    },
    {
        id: 2,
        image: assets.frame2,
        alt: "Logistics Support",
        title: "Logistics Support",
        price: "1,500",
        quantity: "1 trip"
    }
];

export default function BookingSummary() {
    return (
        <div className="summary">
            <div className="summary__box">
                <SummaryIntro name="Johnson" />
                <SummaryDetails />
                <SummaryItems items={items} />
                <SummaryTotals />
                <ConfirmTransaction />
            </div>
        </div>
    )
}

function SummaryIntro({ name }) {
    return (
        <div>
            <img src={assets.agriconLogo} alt="Agricon Logo" className="agricon-logo-sm" />
            <h2 className="summary__heading">Booking Summary</h2>
            <p className="summary__individual">Hello {name ? name : ""},</p>
            <p>Below is your booking summary, confirm and continue to payment</p>
        </div>
    )
}

function SummaryDetails() {
    return (
        <div className="summary__details">
            <div>
                <h4 className="summary__order--header mb-1">Order Date</h4>
                <p>18th June, 2025</p>
                <p className="green">14:00 (WAT)</p>
            </div>
            <div>
                <h4 className="summary__order--header mb-1">Order Number</h4>
                <p>N/A</p>
            </div>
            <div>
                <h4 className="summary__order--header mb-1">Payment Method</h4>
                <p>N/A</p>
            </div>
            <div>
                <h4 className="summary__order--header mb-1">Shipping Address</h4>
                <p>15B Dolor Ave.</p>
                <p className="green">Lagos, NGA</p>
            </div>
        </div>
    )
}

function SummaryItems({ items = [] }) {
    return (
        <div className="summary__item--section">
            {items.map((item) => (
                <div className="summary__item" key={item.id}>
                    <div className="summary__item--image">
                        <img src={item.image} alt={item.alt} />
                    </div>
                    
                    <div className="summary__item--description">
                        <h3>{item.title}</h3>
                        <p><span className="num">₦{item.price}/</span><span className="day">day</span></p>
                        <p> <span className="day">Quantity:</span> <span className="num">{String(item.quantity).charAt(0)}</span> {String(item.quantity).slice(1)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function SummaryTotals() {
    return (
        <div className="summary__calculations">
            <div>
                <img src={assets.pending} alt="pending status" />
            </div>
            <div className="summary__amount">
                <p>Sub-total</p>
                <p>₦10,500</p>
                <p>Shipping fee</p>
                <p>₦750</p>
                <p>VAT</p>
                <p>₦7.50</p>
            </div>
            <div className="summary__total">
                <p>TOTAL</p>
                <p>₦11,400</p>
            </div>
        </div>
    )
}

function ConfirmTransaction() {
    return (
        <div className="confirm__transaction">
            <Button className="btn btn--green btn--w3 btn--sm-8">Continue to payment</Button>
            <Button className="btn btn--no-bg btn--w3 btn--sm-8">Cancel</Button>
        </div>
    )
}