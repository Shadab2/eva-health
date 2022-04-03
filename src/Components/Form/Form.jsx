import React from "react";
import "./form.css";

function Form({ handleModal, open }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleModal();
    window.scroll(0, 0);
  };
  return (
    <div className={`form-container ${open}`}>
      <div className="form-wrapper">
        <h3 className="form-title">Enter up the details to Register</h3>
        <form className="form">
          <div className="input-wrapper">
            <div className="form-input half-width">
              <label className="label" htmlFor="fullName">
                Doctor Name*
              </label>
              <input
                className="ip"
                type="text"
                name="fullname"
                placeholder="Full Name"
              />
            </div>
            <div className="form-input  half-width">
              <label className="label" htmlFor="speciality">
                Speciality*
              </label>
              <input
                className="ip"
                type="text"
                name="speciality"
                placeholder="Speciality"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="form-input">
              <label className="label" htmlFor="email">
                Email*
              </label>
              <input
                className="ip"
                type="text"
                name="email"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="form-input">
              <label className="label" htmlFor="mobile">
                Mobile*
              </label>
              <input
                className="ip"
                type="text"
                name="mobile"
                placeholder="6386432858"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="form-input">
              <label className="label" htmlFor="expireince">
                Experience*
              </label>
              <input
                type="text"
                name="expireince"
                placeholder="Write in numbers"
                className="ip"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="form-input">
              <label className="label" htmlFor="clinic">
                Mobile*
              </label>
              <input
                className="ip"
                type="text"
                name="Clinic  Name*"
                placeholder="Eg. Sharda Clinic"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="form-input">
              <label className="label" htmlFor="clinic">
                Adress*
              </label>
              <input
                className="ip"
                type="text"
                name="address"
                placeholder="eg. Near park street, Calcutta, W.B."
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="form-input">
              <label className="label" htmlFor="work-experience">
                Add Work Experience*
              </label>
              <input
                className="ip"
                type="text"
                name="work-experience"
                placeholder="eg.   2013 - 2014 Senior registrar at Sahyadri Narayana Hrudayala
"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="form-input  half-width">
              <label className="label" htmlFor="start-date">
                Start Date*
              </label>
              <input
                className="ip"
                type="date"
                name="start-date"
                placeholder="DD-MM-YY"
              />
            </div>
            <div className="form-input half-width">
              <label className="label" htmlFor="end-date">
                End Date*
              </label>
              <input
                className="ip"
                type="date"
                name="end-date"
                placeholder="DD-MM-YY"
              />
            </div>
          </div>
          <div className="check-box">
            <input className="ip" type="checkbox" name="check" />
            <label
              htmlFor="check"
              style={{
                transform: "translateY(5px)",
                marginLeft: "5px",
                color: "grey",
                fontSize: "12px",
              }}
            >
              Presently at this postion
            </label>
          </div>
          <div className="input-wrapper">
            <div className="form-input">
              <label className="label" htmlFor="education">
                Education*
              </label>
              <input
                className="ip"
                type="text"
                name="education"
                placeholder="eg.   2013 - 2014 Senior registrar at Sahyadri Narayana Hrudayala
"
              />
              <input
                className="ip"
                type="text"
                name="education"
                placeholder="eg.   MD - General Medicine - BLDEA's Shri B M patil Medical College. Bijapur, 2013"
              />
              <input type="button" value="Add More +" className="ip" />
            </div>
          </div>
          <input
            type="submit"
            value="Complete Registration"
            className="ip"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
