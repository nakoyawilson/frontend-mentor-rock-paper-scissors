import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import closeIcon from "../images/icon-close.svg";
import "./Rules.css";

const Rules = ({ closeModal }) => {
  return (
    <section className="rules-modal" id="modal">
      <h2 className="heading-rules">Rules</h2>
      <div className="wrapper-rules">
        <div className="choice-wrapper">
          <img src={paperIcon} alt="Paper" />
        </div>
        <div className="choice-wrapper">
          <img src={scissorsIcon} alt="Scissors" />
        </div>
        <div className="choice-wrapper">
          <img src={rockIcon} alt="Rock" />
        </div>
      </div>
      <button onClick={closeModal}>
        <span className="visually-hidden">Close Modal</span>
        <img src={closeIcon} alt="" />
      </button>
    </section>
  );
};

export default Rules;
