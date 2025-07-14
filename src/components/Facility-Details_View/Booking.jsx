import { useEffect } from "react";

import Button from "../Button";

export default function Booking() {
    useEffect(() => {
    
        const datetimeInput = document.getElementById("datetime");
        if (datetimeInput) {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        
        datetimeInput.min = `${year}-${month}-${day}T${hours}:${minutes}`;
        datetimeInput.max = "2030-12-31T23:59";
        }
    }, []);

  return (
    <div className="booking">
      <div className="booking__section">
        <form className="form">
          <h2 className="form__heading">New Booking</h2>
          <div className="form__fields">
            <div className="form__group">
              <label for="name" className="form__label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form__input"
                placeholder="Enter your full name"
                minLength="2"
                maxLength="2"
                pattern="[A-Za-z ]+"
              />
            </div>
            <div className="form__group">
              <label for="datetime" className="form__label">
                Date & Time <span>*</span>
              </label>
              <input
                type="datetime-local"
                className="form__input"
                id="datetime"
                name="datetime"
                required
                min="2024-01-01T00:00"
                max="2030-12-31T23:59"
                placeholder="mm/dd/yyyy"
              />
            </div>
            <div className="form__group">
              <label for="duration" className="form__label">
                Duration <span>*</span>
              </label>
              <input
                type="text"
                className="form__input"
                id="duration"
                required
                placeholder="Enter duration in (days)"
              />
            </div>
            <div className="form__group">
              <label for="message" className="form__label">
                Special Requirement
              </label>
              <textarea
                id="message"
                className="form__input"
                placeholder="Enter any special requirements"
              ></textarea>
            </div>
            <div className="center">
              <Button className="btn btn--full btn--green">Confirm Booking</Button>
            </div>
          </div>
        </form>



        <div className="booking__calendar">
        <h2 className="title">Pick time & date</h2>
      <div className="content">
        <div className="calendar-section">
          <div className="calendar-header">
            <span>June 2025</span>
            <div className="arrows">
              <button className="arrow">&#8592;</button>
              <button className="arrow">&#8594;</button>
            </div>
          </div>
          <div className="calendar-grid">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
              <div key={idx} className="day-label">{day}</div>
            ))}
            {[
              '', '', '', '', '', '', '',
              1, 2, 3, 4, 5, 6,
              7, 8, 9, 10, 11, 12, 13,
              14, 15, 16, 17, 18, 19, 20,
              21, 22, 23, 24, 25, 26, 27,
              28, 29, 30
            ].map((date, idx) => (
              <div
                key={idx}
                className={`date-cell ${date === 16 ? 'selected' : ''} ${date === '' ? 'disabled' : ''}`}
              >
                {date}
              </div>
            ))}
          </div>
        </div>
        <div className="input-section">
          <input
            type="text"
            className="input-box"
            defaultValue="June 16, 2025"
            readOnly
          />
          <input
            type="text"
            className="input-box"
            defaultValue="12:23 PM"
            readOnly
          />
          <div className="buttons">
            <button className="cancel">Cancel</button>
            <button className="reset">Reset date & time</button>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
