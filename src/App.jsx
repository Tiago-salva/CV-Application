import { useState } from "react";
import CustomInput from "./components/customInput";
import CustomForm from "./components/CustomForm";

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
    id: "Address",
    type: "text",
  },
];
const educationInputs = [
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
  return (
    <>
      <h2>Personal details</h2>
      <CustomForm inputs={personalInputs}></CustomForm>

      <h2>Education</h2>
      <CustomForm inputs={educationInputs}></CustomForm>

      <h2>Experience</h2>
      <CustomForm inputs={experienceInputs}></CustomForm>
    </>
  );
}
