import './App.css';
import { useState } from "react";

function App() {

  const [Silver, SetSilver] = useState(0);
  const [Players, SetPlayers] = useState(1);
  const [Repair, SetRepair] = useState(0);
  const [FinalSilver, SetFinalSilver] = useState(0);

  const handleSilver = (event) => {
    SetSilver(event.target.value);
  }

  const handlePlayers = (event) => {
    SetPlayers(event.target.value)
  }

  const handleRepair = (event) => {
    SetRepair(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    SetFinalSilver((Silver - Repair) / Players);
    SetFinalSilverLeader((Number(Repair) + ((Silver - Repair) / Players)));
  }
  
  return (
    <div className='div'>
      <form onSubmit={handleSubmit}>
        Total Silver: <br/>
        <input 
          id="Silver"
          type="number"  
          value={Silver}
          onChange={handleSilver}/><br/>
        Number of players: <br/>
        <input
          id="players"
          type="number"
          value={Players}
          onChange={handlePlayers}/><br/>
        Repair cost: <br/>
        <input
          id="Repair"
          type="number"
          value={Repair}
          onChange={handleRepair}/><br/>
        <input 
          id="Submit"
          type="submit" 
          value="Calculate" />
      </form>
      <p>{FinalSilver}</p>
    </div>
  );
}

export default App;
