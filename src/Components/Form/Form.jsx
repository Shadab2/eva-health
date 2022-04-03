import React, { useEffect, useRef, useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./form.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import InputEducation from "../InputEducation/InputEducation";
import toast, { Toaster } from "react-hot-toast";

const options = ["Physio Therapist", "Cardiologist", "Surgeon", "Physician"];
const defaultOption = options[0];

const InitialState = {
  fullname: "",
  speciality: "",
  email: "",
  mobile: "",
  experience: "",
  clinicName: "",
  address: "",
  startDate: "",
  endDate: "",
};

function Form({ handleModal, open }) {
  const [blocks, setblocks] = useState(2);
  const [checked, setChecked] = useState(false);
  const [mobileInputFocus, setMobileInputFocus] = useState(false);
  const [eduError, setEduError] = useState(null);
  const AddEducationBlock = () => {
    setblocks((blocks) => blocks + 1);
  };

  const ed1 = useRef();
  const ed2 = useRef();
  const ed3 = useRef();
  const ed4 = useRef();

  const [dateError, setDateError] = useState(null);
  const [state, setState] = useState(InitialState);

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEdu = () => {
    if (ed1.current.value === "") {
      setEduError("Education Field is required");
      return false;
    }
    if (ed2.current.value === "") {
      setEduError("Education Field is required");
      return false;
    }
    if (blocks >= 3 && ed3.current.value === "") {
      setEduError("Education Field is required");
      return false;
    }
    if (blocks === 4 && ed4.current.value === "") {
      setEduError("Education Field is required");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eduError || !validateEdu || dateError) {
      toast.error("Validation Failed ");
      return;
    }
    const data = {
      ...state,
      education:
        ed1.current.value +
        " , " +
        ed2.current.value +
        `${ed3.current ? ed3.current.value : ""}` +
        " , " +
        `${ed4.current ? ed4.current.value : ""}`,
    };
    toast.success("Succesfully Submitted");
    console.log(data);
    setTimeout(() => {
      handleModal();
      // setState(InitialState);
      window.scroll(0, 0);
    }, 2000);
  };

  const handleDate = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: new Date(e.target.value).toLocaleDateString(),
    }));
  };

  useEffect(() => {
    const validateDate = () => {
      if (new Date(state.endDate) < new Date(state.startDate)) {
        setDateError("Provide a valid Date");
        return;
      }
      setDateError(null);
    };
    validateDate();
  }, [state.startDate, state.endDate]);

  const removeBlock = () => {
    if (blocks === 2) return;
    if (blocks == 4) ed4.current.value = "";
    if (blocks == 3) ed3.current.value = "";
    setblocks((block) => block - 1);
  };
  return (
    <div className={`form-container ${open}`}>
      <div className="form-wrapper">
        <h3 className="form-title">Enter up the details to Register</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <FormInput
              label="Doctor Name*"
              type="text"
              name="fullname"
              placeholder="Full Name"
              half
              onChange={handleChange}
              error="fullName required"
              required
            />
            <div className="form-input half-width">
              <label htmlFor="speciality">Speciality*</label>
              <Dropdown
                options={options}
                value={defaultOption}
                className="select-box"
                controlClassName="select-box-inner"
                arrowClassName="select-box-arrow"
                placeholder="Select Sepecialization"
                onChange={(e) =>
                  setState((prev) => ({ ...prev, speciality: e.value }))
                }
              />
            </div>
          </div>
          <FormInput
            label="Email*"
            type="email"
            name="email"
            placeholder="you@example.com"
            onChange={handleChange}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            error="Provide a valid email address"
          />
          <div className="form-input">
            <label htmlFor="mobile">*Mobile Number</label>
            <div className="form-mobile">
              <span>IND</span>
              <img src="/assets/arrow.png" alt="arrow" />
              <input
                type="text"
                className="ip"
                placeholder="6386432858"
                name="mobile"
                onChange={handleChange}
                onBlur={() => setMobileInputFocus((focus) => !focus)}
                focus={mobileInputFocus.toString()}
                required
                pattern="[1-9]{1}[0-9]{9}"
                error="provide a valid mobile number"
              />
              <span style={{ display: "none", color: "red", fontSize: "12px" }}>
                Enter a Valid Mobile No.
              </span>
            </div>
          </div>
          <div className="input-wrapper">
            <FormInput
              label="Experience*"
              type="text"
              name="experience"
              placeholder="Write in numbers"
              onChange={handleChange}
              required
              pattern="[1-9][0-9]"
              error="Experience Required"
              half
            />
            <FormInput
              label="Clinic Name*"
              type="text"
              name="clinicName"
              placeholder="Eg. Sharda Clinic"
              onChange={handleChange}
              half
            />
          </div>
          <FormInput
            label="Address"
            type="text"
            name="address"
            onChange={handleChange}
            placeholder="eg. Near park street, Calcutta, W.B."
            max={150}
            error="max 150 chars are allowed"
          />
          <FormInput
            label="Add Work Experience"
            type="text"
            name="workExperience"
            onChange={handleChange}
            placeholder="eg.   2013 - 2014 Senior registrar at Sahyadri Narayana Hrudayala
"
            max={150}
            error="max 150 chars are allowed"
          />
          <div className="input-wrapper">
            <FormInput
              half
              label="StartDate*"
              type="date"
              name="startDate"
              placeholder="DD-MM-YY"
              onChange={handleDate}
              required
              error="Start date is required"
            />
            {dateError && (
              <span className="date-error">Provide a valid Date</span>
            )}
            <FormInput
              half
              label="EndDate*"
              type="date"
              name="endDate"
              onChange={handleDate}
              placeholder="DD-MM-YY"
              disabled={checked}
              required
            />
          </div>
          <div className="check-box">
            <input
              className="ip"
              type="checkbox"
              name="check"
              onChange={() =>
                setChecked((check) => {
                  if (!check) {
                    var newDate = new Date().toLocaleDateString();
                    setState((prev) => ({ ...prev, endDate: newDate }));
                  }
                  return !check;
                })
              }
            />
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
                required
                ref={ed1}
              />
              <input
                className="ip"
                type="text"
                name="education"
                placeholder="eg.   MD - General Medicine - BLDEA's Shri B M patil Medical College. Bijapur, 2013"
                required
                ref={ed2}
              />
              {blocks >= 3 && (
                <InputEducation reference={ed3} removeBlock={removeBlock} />
              )}
              {blocks === 4 && (
                <InputEducation reference={ed4} removeBlock={removeBlock} />
              )}
              {eduError && <span className="date-error">{eduError}</span>}
              <input
                type="button"
                value="Add More +"
                className="ip"
                disabled={blocks === 4}
                onClick={AddEducationBlock}
              />
            </div>
          </div>
          <button type="submit" className="ip">
            Complete Registeration
          </button>
          <Toaster
            position="bottom-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              className: "",
              duration: 5000,
              style: {
                background: "#363636",
                color: "#fff",
              },
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
