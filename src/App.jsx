import React from "react"

import Hero from "./Hero";
import "./Assets/Styles/App.scss"

function App() {
  return (
    <main className="App">
      <div className="bg-block" aria-hidden="true"></div>
      <Hero />
    </main>
  );
}

export default App;
