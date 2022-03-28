import HandSignal from "./HandSignal";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import "./GameInitialState.css";

const GameInitialState = () => {
  return (
    <div className="game-initial-state">
      <HandSignal
        icon={paperIcon}
        iconDescription="Paper"
        buttonClasses="hand-signal paper"
      />
      <HandSignal
        icon={scissorsIcon}
        iconDescription="Scissors"
        buttonClasses="hand-signal scissors"
      />
      <HandSignal
        icon={rockIcon}
        iconDescription="Rock"
        buttonClasses="hand-signal rock"
      />
    </div>
  );
};

export default GameInitialState;
