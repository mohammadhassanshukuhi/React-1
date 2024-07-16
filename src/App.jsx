import React from "react";
import Header from "./components/Header/Header.jsx";
import ConcaptItem from "./components/ConcaptItem.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <ConcaptItem />
       <Examples />
      </main>
    </React.Fragment>
  );
}

export default App;
