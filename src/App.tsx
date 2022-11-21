import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <sdds-theme>
        <Header />
        <MainContent />
        <Footer />
      </sdds-theme>
    </div>
  );
}

export default App;
