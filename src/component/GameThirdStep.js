import "./GameThirdStep.css";

const GameThirdStep = ({ winner }) => {
  return (
    <div>
      <h2 className="winner">
        {winner === "user"
          ? "You Win"
          : winner === "computer"
          ? "You Lose"
          : "It's a tie"}
      </h2>
      <button type="button" className="play-again">
        Play Again
      </button>
    </div>
  );
};

export default GameThirdStep;
