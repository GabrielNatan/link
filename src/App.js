import {useState} from "react";
import Modal from '../src/Components/ModalUser'
function App() {
  const [open,setOpen] = useState(false)
  return (
    <div className="App">
      <Modal></Modal>
      <button onClick={()=>setOpen(true)}>Open</button>
    </div>
  );
}

export default App;
