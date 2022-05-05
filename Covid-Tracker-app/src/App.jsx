import { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import { Covid } from "./components/covid";
function App() {
  return (
    <div className="App">
      <h1> 🔴 Live Covid Updates</h1>
      <Covid />
    </div>
  );
}

export default App;
