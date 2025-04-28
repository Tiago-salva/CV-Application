import { useState } from "react";
import CustomInput from "./components/customInput";
import CustomForm from "./components/CustomForm";
import Header from "./components/Header";
import Section from "./components/Section";
import "./styles/App.css";

const personalInputs = [
  {
    label: "Full name",
    placeHolder: "First and last name",
    id: "full-name",
    type: "text",
  },
  {
    label: "Email",
    placeHolder: "Enter email",
    id: "email",
    type: "email",
  },
  {
    label: "Phone number",
    placeHolder: "Enter phone number",
    id: "phone",
    type: "tel",
  },
  {
    label: "Address",
    placeHolder: "City or Country",
    id: "address",
    type: "text",
  },
];
const educationInputs = [
  {
    title: "Education",
  },
  {
    label: "School",
    placeHolder: "Enter school or university",
    id: "school",
    type: "text",
  },
  {
    label: "Degree",
    placeHolder: "Enter degree or Field of study",
    id: "degree",
    type: "text",
  },
  {
    label: "Start date",
    placeHolder: "Enter start date",
    id: "education-start-date",
    type: "date",
  },
  {
    label: "End date",
    placeHolder: "Enter end date",
    id: "education-end-date",
    type: "date",
  },
];
const experienceInputs = [
  {
    title: "Profesional experience",
  },
  {
    label: "Company name",
    placeHolder: "Enter company name",
    id: "company",
    type: "text",
  },
  {
    label: "Position title",
    placeHolder: "Enter position title",
    id: "position",
    type: "text",
  },
  {
    label: "Start date",
    placeHolder: "Enter start date",
    id: "experience-start-date",
    type: "date",
  },
  {
    label: "End date",
    placeHolder: "Enter end date",
    id: "experience-end-date",
    type: "date",
  },
  {
    label: "Description",
    placeHolder: "Enter description",
    id: "description",
    type: "text",
  },
];

export default function App() {
  const [personalData, setPersonalData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});

  return (
    <>
      <div className="form-container">
        <div className="personal-details">
          <CustomForm
            title={"Personal details"}
            inputs={personalInputs}
            formData={personalData}
            setFormData={setPersonalData}
          ></CustomForm>
        </div>

        <div className="education-form">
          <CustomForm
            title={"Education"}
            inputs={educationInputs}
            formData={educationData}
            setFormData={setEducationData}
          ></CustomForm>
        </div>

        <div className="experience-form">
          <CustomForm
            title={"Experience"}
            inputs={experienceInputs}
            formData={experienceData}
            setFormData={setExperienceData}
          ></CustomForm>
        </div>
      </div>

      <div className="cv-container">
        <Header data={personalData}></Header>
        <Section data={educationData}></Section>
        <Section data={experienceData}></Section>
      </div>
    </>
  );
}
