import "./HandSignal.css";

const HandSignal = ({ icon, iconDescription, buttonClasses }) => {
  return (
    <button type="button" className={buttonClasses}>
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
