import "./styles.css";
import Navbar from "./Components/Navbar";
import ConditionalArgument from "./Components/ConditionalArgument";
import EventListener from "./Components/EventListener";
import ReactStatesFile from "./Components/ReactStatesFile";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ConditionalArgument />
      <ReactStatesFile />
      <EventListener />
    </div>
  );
}
