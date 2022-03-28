import { useState, useEffect } from "react";
import Header from "./component/Header";
import GameInitialState from "./component/GameInitialState";
import GameSecondStep from "./component/GameSecondStep";
import GameThirdStep from "./component/GameThirdStep";
import Rules from "./component/Rules";
import "./App.css";

const App = () => {
  const [userPlays, setUserPlays] = useState("");
  const [computerPlays, setComputerPlays] = useState("");
  const [winner, setWinner] = useState("");
  const [score, setScore] = useState(
    localStorage.getItem("nw-fem-rps-score")
      ? Number(localStorage.getItem("nw-fem-rps-score"))
      : 0
  );

  const increaseScore = () => {
    setScore(score + 1);
  };

  const decreaseScore = () => {
    setScore(score - 1);
  };

  const updateComputerPlays = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    setComputerPlays(randomNumber);
  };

  const determineWinner = () => {
    updateComputerPlays();
    if (userPlays > computerPlays || (userPlays === 1 && computerPlays === 3)) {
      setWinner("user");
      increaseScore();
    } else if (userPlays === computerPlays) {
      setWinner("tie");
    } else {
      setWinner("computer");
      decreaseScore();
    }
    console.log({ userPlays, computerPlays });
  };

  const updateUserPlays = (e) => {
    setUserPlays(Number(e.currentTarget.value));
    determineWinner();
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

  useEffect(() => {
    localStorage.setItem("nw-fem-rps-score", score);
  });

  return (
    <>
      <Header score={score} />
      <main>
        <GameInitialState updateUserPlays={updateUserPlays} />
        <GameSecondStep userPlays={userPlays} computerPlays={computerPlays} />
        <GameThirdStep winner={winner} />
        <button type="button" className="rules" onClick={openModal}>
          Rules
        </button>
        <Rules closeModal={closeModal} />
      </main>
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
