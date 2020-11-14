import "./card.styles.css";

const Card = ({ header, title, body }) => {
  return (
    <div class="card text-white bg-primary mb-3" style={{ maxWidth: "20rem" }}>
      <div class="card-header">{header}</div>
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p class="card-text">{body}</p>
      </div>
    </div>
  );
};

export default Card;
