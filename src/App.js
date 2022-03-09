import {useState} from "react";
import CardsCheck from "./Components/CardsCheck";
import CardPlans from "./Components/CardsPlans";
import LineChartRealTime from "./Components/LineChartRealTime";
import PlansTable from "./Components/PlansTable";
function App() {
  const [open,setOpen] = useState(false)
  return (
    <div className="App">
      <div className="contCenter">
        <PlansTable />
      </div>
    </div>
  );
}

export default App;