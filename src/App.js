import React, { useState } from "react";
import "./styles.css";

//defining practices first
const yoga = [
  { name: "Warmup", level: "" },
  { name: "Asana-Library", level: "intermediate" },
  { name: "Suryanamaskar", level: "beginner" },
  { name: "Relaxation", level: "" }
];
const meditation = [
  { name: "Beginner-guide to Meditation", level: "beginner" },
  { name: "Pranayama", level: "beginner" },
  { name: "Stress-reduction", level: "beginner-intermediate" },
  { name: "Understanding the mind", level: "advanced" }
];

const dancefitness = [
  { name: "Beginner Cardio Dance", level: "beginner" },
  { name: "Cardio Tone and Dance", level: "intermediate" },
  { name: "Cardio Dance with Punjabi Songs", level: "advanced" },
  { name: "Belly Dancing", level: "beginner-intermediate" },
  { name: "Dance for Joy", level: "beginner" }
];
const weightloss = [
  { name: "Calorie-crush", level: "intermediate" },
  { name: "HIIT", level: "intermediate-advanced" },
  { name: "Abs,butt and thigh", level: "intermediate" },
  { name: "Strength", level: "intermediate" },
  { name: "Belly burn", level: "advanced" }
];
const workfromhometips = [
  { name: "Stay Active", level: "intermediate" },
  { name: "Healthy Spine", level: "intermediate" },
  { name: "5 min workout", level: "advanced" },
  { name: "Stretch and Release", level: "intermediate" }
];
const fitterWays = {
  workFromHomeTips: workfromhometips,
  yoga: yoga,
  meditation: meditation,
  danceFitness: dancefitness,
  weightLoss: weightloss
};
const fitterWaysKeys = Object.keys(fitterWays);

export default function App() {
  var [workOuts, setWorkOuts] = useState("workFromHomeTips");
  function onClickHandler(way) {
    setWorkOuts(way);
  }
  const styleNavigation = {
    backgroundColor: "#3ff39f",
    color: "#24292e",
    padding: "1rem",
    fontWeight: "bolder",
    fontSize: "550",
    borderBottomLeftRadius: "1rem",
    textAlign: "right",
    margin: "0px"
  };
  const styleSpan = {
    color: "#3ff39f"
  };
  const styleDiv = {
    overflow: "auto"
  };
  const styleImage = {
    maxWidth: "80%",
    width: "300px",
    display: "block",
    margin: "auto",
    paddingTop: "1rem"
  };
  const styleUnorderList = {
    listStyle: "none",
    display: "inline-block",
    padding: "1em 2em"
  };
  const styleListKeys = {
    textDecoration: "none",
    cursor: "pointer",
    overflow: "auto",
    backgroundColor: "var(--background-grey)",
    color: "var(--github-black)",
    // boxShape: "border-box",
    borderRadius: "0.5rem",
    border: "1px solid var(--yours-green)",
    fontWeight: "500",
    padding: "0.5rem",
    margin: "0.5rem",
    display: "inline-flex"
  };
  const styleList = {
    textDecoration: "none",
    borderRadius: "0.3rem",
    padding: "1rem",
    border: "2px solid var(--border-grey)",
    margin: "1rem"
  };
  const styleListName = {
    fontSize: "larger",
    display: "block-inline"
  };
  const styleListLevel = {
    fontSize: "smaller",
    fontWeight: "200",
    color: "grey"
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
        <h1>
          FitStart <span style={styleSpan}>through</span>
        </h1>
      </header>
      <div style={styleDiv}>
        <ul style={styleUnorderList}>
          {fitterWaysKeys.map((way) => (
            <li
              style={styleListKeys}
              key={way.id}
              onClick={() => onClickHandler(way)}
            >
              {way}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul style={styleUnorderList}>
          {Object.values(fitterWays[workOuts]).map(function (way) {
            return (
              <li style={styleList} key={way.name}>
                <div style={styleListName}>{way.name}</div>
                <div style={styleListLevel}>{way.level}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <footer className="footer">
        <div className="footer-header">social media presence</div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a className="link" href="https://github.com/Manasa1013">
              <em className="fab fa-github fa-2x"></em>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/manasa-mandalreddy/"
            >
              <em className="fab fa-linkedin fa-2x"></em>
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://instagram.com/manasamandalreddy_">
              <em className="fab fa-instagram fa-2x"></em>
            </a>
          </li>
        </ul>
        <div className="footer-copy">Copyright &copy; 2020</div>
      </footer>
    </div>
  );
}
