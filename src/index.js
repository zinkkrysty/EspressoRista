import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let app = document.createElement("div");
app.id = "root";
document.body.appendChild(app);

console.log("this works");

ReactDOM.render(<App />, app);
