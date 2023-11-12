/*
    The "App" function name is a commonly used starting point for many React applications. 
    Its purpose is to display JSX code to the browser. JSX looks something like HTML but is 
    really Javascript that is unique to React. 
*/
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.querySelector("#root"));