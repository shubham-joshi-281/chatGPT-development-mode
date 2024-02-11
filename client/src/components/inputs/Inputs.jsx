import "./input.css";
const Inputs = ({
  title,
  type,
  value,
  onChange,
  placeholder,
  required,
  name,
}) => {
  return (
    <>
      <form className="form">
        <label>{title}</label>
        <input
          className="in"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </form>
    </>
  );
};

export default Inputs;
