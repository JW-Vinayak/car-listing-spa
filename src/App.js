import React from "react";
import "./styles/styles.scss";
import CarList from "./components/CarList/carListContainer";
import Filters from "./components/Filters/filterContainer";
function App() {
  return (
    <div className="App">
      <Filters />
      <CarList />
    </div>
  );
}

export default App;
