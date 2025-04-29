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
    name: "full-name",
  },
  {
    label: "Email",
    placeHolder: "Enter email",
    id: "email",
    type: "email",
    name: "email",
  },
  {
    label: "Phone number",
    placeHolder: "Enter phone number",
    id: "phone",
    type: "tel",
    name: "phone",
  },
  {
    label: "Address",
    placeHolder: "City or Country",
    id: "address",
    type: "text",
    name: "address",
  },
];
const educationInputs = [
  {
    label: "School",
    placeHolder: "Enter school or university",
    id: "school",
    type: "text",
    name: "institutionLabel",
  },
  {
    label: "Degree",
    placeHolder: "Enter degree or Field of study",
    id: "degree",
    type: "text",
    name: "positionLabel",
  },
  {
    label: "Start date",
    placeHolder: "Enter start date",
    id: "education-start-date",
    type: "text",
    name: "startDateLabel",
  },
  {
    label: "End date",
    placeHolder: "Enter end date",
    id: "education-end-date",
    type: "text",
    name: "endDateLabel",
  },
  {
    label: "Location",
    placeHolder: "Enter location",
    id: "education-location",
    type: "text",
    name: "locationLabel",
  },
];
const experienceInputs = [
  {
    label: "Company name",
    placeHolder: "Enter company name",
    id: "company",
    type: "text",
    name: "institutionLabel",
  },
  {
    label: "Position title",
    placeHolder: "Enter position title",
    id: "position",
    type: "text",
    name: "positionLabel",
  },
  {
    label: "Start date",
    placeHolder: "Enter start date",
    id: "experience-start-date",
    type: "text",
    name: "startDateLabel",
  },
  {
    label: "End date",
    placeHolder: "Enter end date",
    id: "experience-end-date",
    type: "text",
    name: "endDateLabel",
  },
  {
    label: "Description",
    placeHolder: "Enter description",
    id: "description",
    type: "text",
    name: "descriptionLabel",
  },
  {
    label: "Location",
    placeHolder: "Enter location",
    id: "education-location",
    type: "text",
    name: "locationLabel",
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
        <Section data={educationData} title={"Education"}></Section>
        <Section
          data={experienceData}
          title={"Profesional experience"}
        ></Section>
      </div>
    </>
  );
}
