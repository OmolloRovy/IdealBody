/* eslint-disable react/jsx-no-undef */
import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons"; // Import the Reasons component

function App() {
    return ( <
        div className = "App" >
        <
        Hero / >
        <
        Programs / >
        <
        Reasons / > { /* Use the Reasons component */ } <
        /div>
    );
}

export default App;