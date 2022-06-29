import React from "react";
import "./App.css";

let name: string;
//union
let age: number | string;
let isStudent: boolean;
let hobbies: string[]; //array of strings
let role: [number, string]; //tuple

age = "thirty five";

object;
type Person = {
  name: string;
  age?: number;
};
let person: Person = {
  name: "ET",
  age: 32,
};

let lotsOfPeople: Person[];

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
