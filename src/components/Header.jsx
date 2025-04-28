export default function Header({ data }) {
  return (
    <header>
      <h1>{data["full-name"]}</h1>
      <div className="contact-info-container">
        <div className="email">
          {/* <img></img> */}
          <p>{data["email"]} </p>
        </div>
        <div className="phone">
          {/* <img></img> */}
          <p>{data["phone"]} </p>
        </div>
        <div className="address">
          {/* <img></img> */}
          <p>{data["address"]} </p>
        </div>
      </div>
    </header>
  );
}
