export default function Header({ data }) {
  return (
    <header className="resume-header">
      <h1>{data["full-name"]}</h1>
      <div className="contact-info-container">
        <div className="email">
          {/* icono */}
          <p>{data["email"]} </p>
        </div>
        <div className="phone">
          {/* icono */}
          <p>{data["phone"]} </p>
        </div>
        <div className="address">
          {/* icono */}
          <p>{data["address"]} </p>
        </div>
      </div>
    </header>
  );
}
