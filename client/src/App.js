import React, { Fragment } from "react";
import "./App.css";

// components
import CenteredGrid from "./components/CenteredGrid";

function App() {
  return (
    <Fragment>
      <div className="container">
        <CenteredGrid/>
      </div> 
    </Fragment>
  );
}

export default App;
