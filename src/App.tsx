import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { ColorContext } from "./extras/ColorContext";
import YourIP from "./excomponents/YourIp";
import UpMenu from "./components/UpMenu";
import PdfTextExtractor from "./excomponents/PdfTextExtractor";

function App() {
  const [color, setColor] = useState<string>("");
  const handleColorChange = (color: string) => {
    setColor(color);
  };

  return (
    <div>
      <UpMenu />
      <ColorContext.Provider
        value={{
          color: color,
          setColor: handleColorChange,
        }}
      >
        <PdfTextExtractor />
        {/* <YourIP /> */}
        {/* <HomePage /> */}
      </ColorContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
