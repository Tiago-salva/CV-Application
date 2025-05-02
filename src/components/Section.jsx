export default function Section({ data, title }) {
  return (
    <>
      {data.length > 0 && (
        <section className="resume-section">
          <h3 className="section-title">{title}</h3>
          {data.map((section, index) => (
            <div key={index} className="section-info-container">
              <div className="section-info-group">
                <p>
                  {section.startDateLabel}
                  {(section.startDateLabel || section.endDateLabel) && " - "}
                  {section.endDateLabel}
                </p>
                <p>{section.locationLabel}</p>
              </div>
              <div className="section-info-group">
                <p>
                  <strong>{section.institutionLabel}</strong>
                </p>
                <p>{section.positionLabel} </p>
                {section.descriptionLabel && <p>{section.descriptionLabel}</p>}
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
