import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { ColorContext } from "./extras/ColorContext";

function App() {
  const [color, setColor] = useState<string>("");
  const handleColorChange = (color: string) => {
    setColor(color);
  };

  return (
    <div>
      <ColorContext.Provider
        value={{
          color: color,
          setColor: handleColorChange,
        }}
      >
        <HomePage />
      </ColorContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
