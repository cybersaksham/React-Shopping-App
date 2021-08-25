import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Items from "./Components/Items";
import Cart from "./Components/Cart";
import Alert from "./Components/Alert";

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

  const [alert, setAlert] = useState(null);

  // Function to show alerts
  const showAlert = (type, msg) => {
    setAlert({ type: type, msg: msg });
    if (localStorage["timeout"] != null) clearTimeout(localStorage["timeout"]);
    let s = setTimeout(() => {
      setAlert(null);
    }, 2000);
    localStorage["timeout"] = s;
  };

  return (
    <Router>
      <Navbar />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/">
          <Items items={items} showAlert={showAlert} />
        </Route>
        <Route exact path="/cart">
          <Cart items={items} showAlert={showAlert} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
