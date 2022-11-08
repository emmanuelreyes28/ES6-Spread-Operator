import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

//spread operator (...) is used to insert an object or array within another object or array
//it is used as an alternative from the push method

// const citrus = ["Lime", "Lemon", "Orange"];
// const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

// console.log(fruits);

// const fullName = {
//   fName: "James",
//   lName: "Bond",
// };

// const user = {
//   ...fullName,
//   id: 1,
//   username: "jamesbond007",
// };

// console.log(user);
