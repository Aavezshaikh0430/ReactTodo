import React from "react";
import '../index.css' 
import{
  DarkLight,
  ThemeProvider,
} from "./component3hooks/05_useContext.jsx/DarkLight";

function App() {
  return (
    <>
      <ThemeProvider>
        <DarkLight />
      </ThemeProvider>
    </>
  );
}

export default App;
