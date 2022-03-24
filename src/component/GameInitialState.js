import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import "./GameInitialState.css";

const GameInitialState = () => {
  return (
    <div className="game-initial-state">
      <button type="button">
        <span className="visually-hidden">Paper</span>
        <img src={paperIcon} alt="Paper" />
      </button>
      <button type="button">
        <span className="visually-hidden">Scissors</span>
        <img src={scissorsIcon} alt="Scissors" />
      </button>
      <button type="button">
        <span className="visually-hidden">Rock</span>
        <img src={rockIcon} alt="Rock" />
      </button>
    </div>
  );
};

export default GameInitialState;
