import { React, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Items from "./Components/Items";

function App() {
  const [items, setItems] = useState(
    JSON.parse(sessionStorage.getItem("items")) || [
      {
        id: 1,
        title: "First Item",
        desc: "This is the first item",
        price: 22,
        cart: false,
      },
      {
        id: 2,
        title: "Second Item",
        desc: "This is the second item",
        price: 15,
        cart: false,
      },
      {
        id: 3,
        title: "Third Item",
        desc: "This is the third item",
        price: 54,
        cart: false,
      },
      {
        id: 4,
        title: "Fourth Item",
        desc: "This is the fourth item",
        price: 78,
        cart: false,
      },
      {
        id: 5,
        title: "Fifth Item",
        desc: "This is the fifth item",
        price: 14,
        cart: false,
      },
    ]
  );

  return (
    <>
      <Navbar />
      <Items items={items} setItems={setItems} />;
    </>
  );
}

export default App;
