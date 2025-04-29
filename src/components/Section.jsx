export default function Section({ data, title }) {
  return (
    <section className="resume-section">
      <h3 className="section-title">{title}</h3>
      <div className="section-info-container">
        <div className="section-info-group">
          <p>
            {data["startDateLabel"]}
            {(data["startDateLabel"] || data["endDateLabel"]) && " - "}
            {data["endDateLabel"]}
          </p>
          <p>{data["locationLabel"]}</p>
        </div>
        <div className="section-info-group">
          <p>
            <strong>{data["institutionLabel"]}</strong>
          </p>
          <p>{data["positionLabel"]} </p>
          {data["descriptionLabel"] && <p>{data["descriptionLabel"]}</p>}
        </div>
      </div>
    </section>
  );
}
