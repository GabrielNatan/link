import {useState} from "react";
import DevicesList from "./Components/devicesList";
import Ticket from "./Components/Ticket";
function App() {
  const [open,setOpen] = useState(false)
  return (
    <div className="App">
      <div style={{padding:20,margin:30,borderRadius:"10px",width:500,height:300,background:"#FFF"}}>
        <DevicesList/>
      </div>
      <button onClick={()=>setOpen(true)}>Open</button>
    </div>
  );
}

export default App;
