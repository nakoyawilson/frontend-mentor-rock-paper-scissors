import HandSignal from "./HandSignal";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import "./GameInitialState.css";

const GameInitialState = ({ updateUserPlays }) => {
  return (
    <div className="game-initial-state">
      <HandSignal
        icon={paperIcon}
        iconDescription="Paper"
        buttonClasses="hand-signal paper"
        buttonValue={1}
        handleClick={updateUserPlays}
      />
      <HandSignal
        icon={scissorsIcon}
        iconDescription="Scissors"
        buttonClasses="hand-signal scissors"
        buttonValue={2}
        handleClick={updateUserPlays}
      />
      <HandSignal
        icon={rockIcon}
        iconDescription="Rock"
        buttonClasses="hand-signal rock"
        buttonValue={3}
        handleClick={updateUserPlays}
      />
    </div>
  );
};

export default GameInitialState;
