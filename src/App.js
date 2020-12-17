import React, { useState } from "react";
import "./styles.css";

//defining practices first
const yoga = ["Warmup", "Asana-Library", "Suryanamaskar", "Relaxation"];
const meditation = [
  "Beginner-guide to Meditation",
  "Pranayama",
  "Stress-reduction",
  "Understanding the mind"
];
const dancefitness = [
  "Beginner Cardio Dance",
  "Cardio Tone and Dance",
  "Cardio Dance with Punjabi Songs",
  "Belly Dancing",
  "Dance for Joy"
];
const weightloss = [
  "Calorie-crush",
  "Calorie-crush",
  "HIIT",
  "Abs,butt and thigh",
  "Strength",
  "Belly burn"
];
const workfromhomeTips = [
  "Stay Active",
  "Healthy Spine",
  "5 min workout",
  "Stretch and Release",
  "Move well"
];
const fitterWays = {
  yoga: yoga,
  meditation: meditation,
  danceFitness: dancefitness,
  weightLoss: weightloss,
  workFromHomeTips: workfromhomeTips
};
const fitterWaysKeys = Object.keys(fitterWays);

export default function App() {
  var [workOuts, setWorkOuts] = useState("yoga");
  function onClickHandler(way) {
    setWorkOuts(way);
  }
  const styleNavigation = {
    backgroundColor: "#3ff39f",
    color: "white",
    padding: "1rem",
    borderBottomLeftRadius: "1rem",
    textAlign: "right",
    margin: "0px"
  };
  const styleDiv = {};
  const styleImage = {
    maxWidth: "80%",
    width: "350px",
    display: "block",
    margin: "1rem"
  };
  const styleUnorderList = {
    listStyle: "none",
    display: "inline-block",
    padding: "1em 2em"
  };
  const styleList = {
    textDecoration: "none",
    cursor: "pointer"
  };
  return (
    <div className="App" style={styleDiv}>
      <nav className="navigation" style={styleNavigation}>
        Fitter the happier{" "}
        <span role="img" aria-label="workout">
          🏋
        </span>
        ️
      </nav>

      <header className="minds">
        <img
          className="minds-img"
          style={styleImage}
          src="../image/workout.png"
          alt=""
        />
        <h1 className="minds-heading">
          Stronger,<span className="heading-inverted">Faster,Better</span>
        </h1>
      </header>
      <h2>
        Get stronger through
        <ul style={styleUnorderList}>
          {fitterWaysKeys.map((way) => (
            <li onClick={() => onClickHandler(way)} style={styleList}>
              {way}
            </li>
          ))}
        </ul>
      </h2>
      <div style={styleDiv}>
        <ul style={styleUnorderList}>
          <li style={styleList}>
            {Object.values(fitterWays[workOuts]).map((way) => way)}
          </li>
        </ul>
      </div>
      <footer id="main-footer">
        <div class="icons">
          <a href="https://www.instagram.com/manasamandalreddy">
            <em class="fab fa-instagram fa-2x"></em>
          </a>
          <a href="https://www.linkedin.com/in/manasa-mandalreddylreddy">
            <em class="fab fa-linkedin fa-2x"></em>
          </a>
          <a href="https://github.com/Manasa1013">
            <em class="fab fa-github fa-2x"></em>
          </a>
        </div>
        Copyright &copy; 2020
      </footer>
    </div>
  );
}
