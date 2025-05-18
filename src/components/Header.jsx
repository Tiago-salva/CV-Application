import { Mail, Phone, MapPin } from "lucide-react";

export default function Header({ data }) {
  return (
    <header className="resume-header">
      {Object.keys(data).length > 0 && (
        <>
          <h1>{data["full-name"]}</h1>
          <div className="contact-info-container">
            <div className="email">
              {data["email"] && (
                <>
                  <Mail />
                  <p>{data["email"]} </p>
                </>
              )}
            </div>
            <div className="phone">
              {data["phone"] && (
                <>
                  <Phone />
                  <p>{data["phone"]} </p>
                </>
              )}
            </div>
            <div className="address">
              {data["address"] && (
                <>
                  <MapPin />
                  <p>{data["address"]} </p>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
