import { useState } from "react";
import Accordion from "./components/Accordion";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const handleInput = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div className="App">
      <Navbar mode={mode} setMode={setMode} handleInput={handleInput} />
      <Accordion mode={mode} setMode={setMode} />
    </div>
  );
}

export default App;
