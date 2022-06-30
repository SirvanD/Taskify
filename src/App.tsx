import React from "react";
import "./App.css";

let name: string;
//union
let age: number | string;
let isStudent: boolean;
let hobbies: string[]; //array of strings
let role: [number, string]; //tuple

age = "thirty five";

let printAge: (name: string) => void; //or never

function printName(name: string) {
  console.log(name);
}

printName("Sirvan");

// object;
// type Person = {
//   name: string;
//   age?: number;
// };
// let person: Person = {
//   name: "ET",
//   age: 32,
// };

//interface

interface Person {
  name: string;
  age?: number;
}

// let lotsOfPeople: Person[];

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
