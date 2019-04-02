import React from "react";
import ReactDOM from "react-dom";

import HoverOpacity from "./Component/HoverOpacity";
import Awesomeimage from "./Component/Awesomeimage";
import withHoverOpacity from "./Component/withHoverOpacity";
import "./styles.css";

const HoverOpacityAwesomeImage = withHoverOpacity(Awesomeimage, 0.8);

function App() {
  return (
    <div className="App">
      <HoverOpacity>
        <HoverOpacityAwesomeImage src="https://picsum.photos/200/300" />
      </HoverOpacity>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
