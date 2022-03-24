import { useState } from "react";
import Header from "./component/Header";
import GameInitialState from "./component/GameInitialState";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  return (
    <>
      <Header score={score} />
      <main>
        <GameInitialState />
        <button type="button" className="rules">
          Rules
        </button>
      </main>
      <button onClick={increaseScore} className="rules">
        Increase Score
      </button>
      You Picked The House Picked You Win You Lose Play Again
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://nakoyawilson.netlify.app/">Nakoya Wilson</a>.
        </p>
      </footer>
    </>
  );
};

export default App;
