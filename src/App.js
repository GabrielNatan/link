import {useState} from "react";
import CardsCheck from "./Components/CardsCheck";
import CardPlans from "./Components/CardsPlans";
import CircleBar from "./Components/CircleBar";
import LineChartRealTime from "./Components/LineChartRealTime";
import PlansTable from "./Components/PlansTable";
import Image from "./images/Default/icon-checkin.svg"

function App() {
  const [open,setOpen] = useState(false)
  return (
    <div className="App">
      <div className="contCenter">
        <CircleBar image={Image} title="Check-in plan usage" subtitle="13.3k clicked (17%)" num="200M" />
      </div>
    </div>
  );
}

export default App;