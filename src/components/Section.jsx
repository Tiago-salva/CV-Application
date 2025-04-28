export default function Section({ data }) {
  return (
    <section>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <h3>{key}</h3>
          <p key={key}>{value}</p>
        </div>
      ))}
    </section>
  );
}
