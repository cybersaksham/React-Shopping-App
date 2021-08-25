import React, { useState } from "react";

export default function Cart({ items }) {
  const initCart = () => {
    let cart__ = JSON.parse(sessionStorage.getItem("cart")) || [];
    let fin_cart__ = [];
    items.forEach((item) => {
      if (cart__.indexOf(item.id) !== -1) fin_cart__.push(item);
    });
    return fin_cart__;
  };

  const [cart, setCart] = useState(initCart());

  const handleCart = (e) => {
    let id__ = Number(e.target.getAttribute("value"));
    let cart__ = JSON.parse(sessionStorage.getItem("cart")) || [];
    let ind__ = cart__.indexOf(id__);
    if (ind__ !== -1) cart__.splice(ind__, 1);
    sessionStorage.setItem("cart", JSON.stringify(cart__));
    setCart(initCart());
  };

  return (
    <div className="container my-3">
      <ol className="list-group list-group">
        {cart.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{item.title}</div>
                {item.desc}
              </div>
              <div className="ms-2">
                <span className="badge bg-primary rounded-pill">
                  $ {item.price}
                </span>
                <div>
                  <i
                    onClick={handleCart}
                    value={item.id}
                    className="bi bi-cart-dash-fill"
                  ></i>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
