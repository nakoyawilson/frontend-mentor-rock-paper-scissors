import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import "./Rules.css";

const Rules = () => {
  return (
    <section className="rules">
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
    </section>
  );
};

export default Rules;
