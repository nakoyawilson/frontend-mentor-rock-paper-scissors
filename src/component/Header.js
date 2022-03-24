import logo from "../images/logo.svg";
import "./Header.css";

const Header = ({ score }) => {
  return (
    <header className="header">
      <h1 className="visually-hidden">Rock Paper Scissors</h1>
      <img src={logo} alt="Rock Paper Scissors logo" className="logo" />
      <div className="score-wrapper">
        <h2 className="heading-score">
          Score <span className="user-score">{score}</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
