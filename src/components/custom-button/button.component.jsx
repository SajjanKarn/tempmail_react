import "./button.styles.css";

const ButtonInput = ({ text, variant = "primary", ...otherProps }) => (
  <button type="button" className={`btn btn-${variant}`} {...otherProps}>
    {text}
  </button>
);

export default ButtonInput;
