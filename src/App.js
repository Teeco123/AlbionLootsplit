import "./App.css";
import githubicon from "./img/github-icon.png";
import { useState } from "react";

function App() {
  const [Silver, SetSilver] = useState(0);
  const [Players, SetPlayers] = useState(1);
  const [Repair, SetRepair] = useState(0);
  const [FinalSilver, SetFinalSilver] = useState(0);
  const [FinalSilverLeader, SetFinalSilverLeader] = useState(0);

  const handleSilver = (event) => {
    SetSilver(event.target.value);
  };

  const handlePlayers = (event) => {
    SetPlayers(event.target.value);
  };

  const handleRepair = (event) => {
    SetRepair(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    SetFinalSilver(Math.round((Silver - Repair) / Players));
    SetFinalSilverLeader(
      Math.round(Number(Repair) + (Silver - Repair) / Players)
    );
  };

  return (
    <div className="div">
      <div className="calculator">
        <form onSubmit={handleSubmit}>
          Total Silver: <br />
          <input
            id="Silver"
            type="number"
            value={Silver}
            onChange={handleSilver}
          />
          <br />
          Number of players: <br />
          <input
            id="players"
            type="number"
            value={Players}
            onChange={handlePlayers}
          />
          <br />
          Repair cost: <br />
          <input
            id="Repair"
            type="number"
            value={Repair}
            onChange={handleRepair}
          />
          <br />
          <input id="Submit" type="submit" value="Calculate" />
        </form>
        <div className="result">
          Silver for players: {FinalSilver} <br />
          Silver for leader: {FinalSilverLeader}
        </div>
      </div>
      <div className="footer">
        {/* GITHUB ICON */}
        <a
          href="https://github.com/Teeco123/albion-lootsplit"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubicon} alt="github project" />
        </a>
        {/* DISCORD ICON */}
        <a
          href="https://discord.gg/xJGYbemq2b"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
            alt="discord"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
