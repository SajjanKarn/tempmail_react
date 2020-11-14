import "./input-text.styles.css";

const InputField = ({ label, id, ...otherInputProps }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input className="form-control" id={id} {...otherInputProps} />
    </div>
  );
};

export default InputField;
