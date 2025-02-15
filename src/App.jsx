import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [option, setOption] = useState(1); // Controla a opção

  return (
    <div className="App">
      <Navbar setOption={setOption} />
      <Outlet />
    </div>
  );
}

export default App;
