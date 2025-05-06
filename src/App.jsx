import { use, useState } from "react";
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
  const [educationSections, setEducationSections] = useState([]);
  const [experienceSections, setExperienceSections] = useState([]);

  const [personalData, setPersonalData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});

  const [formOpenIndex, setFormOpenIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const forms = [
    {
      key: "education",
      title: "Education",
      inputs: educationInputs,
      formData: educationData,
      setFormData: setEducationData,
      setSection: setEducationSections,
      sections: educationSections,
    },
    {
      key: "experience",
      title: "Experience",
      inputs: experienceInputs,
      formData: experienceData,
      setFormData: setExperienceData,
      setSection: setExperienceSections,
      sections: experienceSections,
    },
  ];

  const onToggle = (index) => {
    setFormOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="form-container">
        {/* Form que siempre queda abierto */}
        <div className="personal-form">
          <h2>Personal details</h2>
          <CustomForm
            title="Personal details"
            inputs={personalInputs}
            formData={personalData}
            setFormData={setPersonalData}
          ></CustomForm>
        </div>

        {forms.map((form, index) => (
          <div key={form.key} className={`${form.key}-form`}>
            <h2>{form.title}</h2>

            {/* Btn para abrir y cerrar el form */}
            <button
              className="section-toggleBtn"
              onClick={() => onToggle(index)}
            >
              {formOpenIndex === index ? "Cerrar" : "Abrir"}
            </button>
            {/* Btn para abrir y cerrar el form */}

            {!showForm ? (
              <>
                {/* Muestra todas las secciones creadas */}
                <div
                  className={`sections-created-container-${
                    formOpenIndex === index ? "open" : "closed"
                  }`}
                >
                  {/* Sirve para mostrar todas las secciones creadas */}
                  {form.sections.map((section) => (
                    <p key={index}>{section.institutionLabel}</p>
                  ))}

                  {/* Btn para añadir nueva seccion, muestra el formulario */}
                  <button onClick={() => setShowForm(true)}>Add</button>
                </div>
              </>
            ) : (
              <>
                {/* Muestra los formularios */}
                <div
                  className={
                    form.key === "personal"
                      ? "form-open"
                      : `form-${formOpenIndex === index ? "open" : "closed"}`
                  }
                >
                  <CustomForm
                    title={form.title}
                    inputs={form.inputs}
                    formData={form.formData}
                    setFormData={form.setFormData}
                    setSection={form.setSection}
                    setShowForm={setShowForm}
                  ></CustomForm>
                </div>
                {/* Muestra los formularios */}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="cv-container">
        <Header data={personalData}></Header>
        <Section
          data={
            Object.keys(educationData).length > 0
              ? [...educationSections, educationData]
              : educationSections
          }
          title={"Education"}
        ></Section>
        <Section
          data={
            Object.keys(experienceData).length > 0
              ? [...experienceSections, experienceData]
              : experienceSections
          }
          title={"Profesional experience"}
        ></Section>
      </div>
    </>
  );
}
