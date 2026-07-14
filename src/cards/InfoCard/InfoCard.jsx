import "./InfoCard.css";

function InfoCard({ title, value, icon, onClick }) {
  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      className={`info-card ${onClick ? "clickable" : ""}`}
      onClick={onClick}
      type={onClick ? "button" : undefined}
    >
      {icon && <span className="info-icon">{icon}</span>}
      <h3>{title}</h3>
      <p>{value ?? "N/A"}</p>
    </Wrapper>
  );
}

export default InfoCard;