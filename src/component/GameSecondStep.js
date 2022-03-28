import HandSignal from "./HandSignal";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import "./GameSecondStep.css";

const GameSecondStep = ({ userPlays, computerPlays }) => {
  const renderSwitch = (selection) => {
    switch (selection) {
      case 1:
        return (
          <HandSignal
            icon={paperIcon}
            iconDescription="Paper"
            buttonClasses="hand-signal paper"
          />
        );
      case 2:
        return (
          <HandSignal
            icon={scissorsIcon}
            iconDescription="Scissors"
            buttonClasses="hand-signal scissors"
          />
        );
      case 3:
        return (
          <HandSignal
            icon={rockIcon}
            iconDescription="Rock"
            buttonClasses="hand-signal rock"
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="step-two">
      <div className="wrapper-pick">
        {userPlays && renderSwitch(userPlays)}
        <h2 className="heading-picked">You Picked</h2>
      </div>
      <div className="wrapper-pick">
        {computerPlays && renderSwitch(computerPlays)}
        <h2 className="heading-picked">The House Picked</h2>
      </div>
    </div>
  );
};

export default GameSecondStep;
