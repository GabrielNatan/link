import {useState} from "react";
import LineChartRealTime from "./Components/LineChartRealTime";
function App() {
  const [open,setOpen] = useState(false)
  return (
    <div className="App">
      <div style={{padding:20,margin:30,borderRadius:"10px",width:500,height:300,background:"#FFF"}}>
        <LineChartRealTime/>
      </div>
      <button onClick={()=>setOpen(true)}>Open</button>
    </div>
  );
}

export default App;
