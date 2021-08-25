import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Items from "./Components/Items";
import Cart from "./Components/Cart";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "First Item",
      desc: "This is the first item",
      price: 22,
    },
    {
      id: 2,
      title: "Second Item",
      desc: "This is the second item",
      price: 15,
    },
    {
      id: 3,
      title: "Third Item",
      desc: "This is the third item",
      price: 54,
    },
    {
      id: 4,
      title: "Fourth Item",
      desc: "This is the fourth item",
      price: 78,
    },
    {
      id: 5,
      title: "Fifth Item",
      desc: "This is the fifth item",
      price: 14,
    },
  ]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Items items={items} />
        </Route>
        <Route exact path="/cart">
          <Cart items={items} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
