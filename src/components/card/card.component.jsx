import ButtonInput from "../custom-button/button.component";
import "./card.styles.css";

const Card = ({ header, title, body }) => {
  return (
    <div class="card text-white bg-primary mb-3" style={{ maxWidth: "20rem" }}>
      <div class="card-header">{header}</div>
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p class="card-text">{body.split(0, 121)}...</p>
        <ButtonInput variant="success" text="View" />
      </div>
    </div>
  );
};

export default Card;
