import { useState } from "react";
import Header from "./component/Header";
import GameInitialState from "./component/GameInitialState";
import Rules from "./component/Rules";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const openModal = () => {
    document.getElementById("modal").classList.add("show-modal");
  };

  const closeModal = () => {
    document.getElementById("modal").classList.remove("show-modal");
  };

  // window.addEventListener("click", (e) =>
  //   e.target === document.getElementById("modal")
  //     ? document.getElementById("modal").classList.remove("show-modal")
  //     : false
  // );

  return (
    <>
      <Header score={score} />
      <main>
        <GameInitialState />
        <button type="button" className="rules" onClick={openModal}>
          Rules
        </button>
      </main>
      <button onClick={increaseScore} className="rules">
        Increase Score
      </button>
      <Rules closeModal={closeModal} />
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
