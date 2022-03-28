import React, { Component } from "react";
import { HousesList } from "./components/HousesList";
import NavBar from "./components/NavBar";
import { NewFormRoom } from "./components/NewRoomForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HousesList />
      </div>
    );
  }
}

export default App;
