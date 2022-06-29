import React from "react";
import "./App.css";

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[]; //array of strings
let role: [number, string]; //tuple
//object
type Person = {
  name: string;
  age: number;
};
let person: Person = {
  name: "ET",
  age: 32,
};

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
