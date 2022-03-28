import "./HandSignal.css";

const HandSignal = ({
  icon,
  iconDescription,
  buttonClasses,
  buttonValue,
  handleClick,
}) => {
  return (
    <button
      type="button"
      className={buttonClasses}
      value={buttonValue}
      onClick={handleClick}
    >
      <span className="visually-hidden">{iconDescription}</span>
      <span className="button-wrapper">
        <span className="icon-wrapper-shadow">
          <span className="icon-wrapper">
            <img src={icon} alt={iconDescription} />
          </span>
        </span>
      </span>
    </button>
  );
};

export default HandSignal;
