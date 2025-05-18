import { use, useState } from "react";
import CustomForm from "./components/CustomForm";
import Header from "./components/Header";
import Section from "./components/Section";
import "./styles/App.css";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";

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

  const [editingIndex, setEditingIndex] = useState(null);

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

  const removeSection = (setSection, index) => {
    setSection((prevSections) =>
      prevSections.filter((section, sectionIndex) => sectionIndex !== index)
    );
  };

  const editSection = (sections, sectionIndex, setFormData) => {
    setFormData(sections[sectionIndex]);
    setEditingIndex(sectionIndex);
    setShowForm(true);
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
            <button
              className={`section-toggleBtn-${
                formOpenIndex === index ? "open" : "closed"
              }`}
              onClick={() => onToggle(index)}
            >
              <h2>{form.title}</h2>
              <div
                className={`chevron-container-${
                  formOpenIndex === index ? "down" : "up"
                }`}
              >
                <ChevronDown />
              </div>
            </button>
            {!showForm ? (
              <>
                <div
                  className={`sections-created-container-${
                    formOpenIndex === index ? "open" : "closed"
                  }`}
                >
                  {form.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="section-created">
                      <p>{section.institutionLabel}</p>
                      <button
                        onClick={() =>
                          editSection(
                            form.sections,
                            sectionIndex,
                            form.setFormData
                          )
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="section-created-remove-btn"
                        onClick={() => {
                          removeSection(form.setSection, sectionIndex);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  ))}

                  <button onClick={() => setShowForm(true)}>Add</button>
                </div>
              </>
            ) : (
              <>
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
                    editingIndex={editingIndex}
                    setEditingIndex={setEditingIndex}
                  ></CustomForm>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="cv-container">
        <Header data={personalData}></Header>
        <Section
          data={
            editingIndex !== null
              ? educationSections
              : Object.keys(educationData).length > 0
              ? [...educationSections, educationData]
              : educationSections
          }
          title={"Education"}
        ></Section>
        <Section
          data={
            editingIndex !== null
              ? experienceSections
              : Object.keys(experienceData).length > 0
              ? [...experienceSections, experienceData]
              : experienceSections
          }
          title={"Profesional experience"}
        ></Section>
      </div>
    </>
  );
}
