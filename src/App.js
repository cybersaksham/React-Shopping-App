import { React, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Items from "./Components/Items";

function App() {
  const [items, setItems] = useState(
    JSON.parse(sessionStorage.getItem("items")) || [
      {
        title: "First Item",
        desc: "This is the first item",
        cart: false,
      },
      {
        title: "Second Item",
        desc: "This is the second item",
        cart: false,
      },
      {
        title: "Third Item",
        desc: "This is the third item",
        cart: false,
      },
      {
        title: "Fourth Item",
        desc: "This is the fourth item",
        cart: false,
      },
      {
        title: "Fifth Item",
        desc: "This is the fifth item",
        cart: false,
      },
    ]
  );

  return (
    <>
      <Navbar />
      <Items items={items} />;
    </>
  );
}

export default App;
