import React, { useState } from "react";

export default function Cart({ items }) {
  const initCart = () => {
    let cart__ = JSON.parse(sessionStorage.getItem("cart")) || [];
    let fin_cart__ = [];
    let total__ = 0;
    items.forEach((item) => {
      if (cart__.indexOf(item.id) !== -1) {
        fin_cart__.push(item);
        total__ += item.price;
      }
    });
    return { cart: fin_cart__, total: total__ };
  };

  const [cart, setCart] = useState(initCart().cart);
  const [total, setTotal] = useState(initCart().total);

  const handleCart = (e) => {
    let id__ = Number(e.target.getAttribute("value"));
    let cart__ = JSON.parse(sessionStorage.getItem("cart")) || [];
    let ind__ = cart__.indexOf(id__);
    if (ind__ !== -1) cart__.splice(ind__, 1);
    sessionStorage.setItem("cart", JSON.stringify(cart__));
    setCart(initCart().cart);
    setTotal(initCart().total);
  };

  return (
    <div className="container my-3">
      <ol className="list-group list-group">
        <li
          className="my-2 list-group-item active d-flex justify-content-between align-items-start"
          aria-current="true"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Total</div>
          </div>
          <div className="ms-2">
            <span className="badge bg-light text-dark rounded-pill">
              $ {total}
            </span>
          </div>
        </li>
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
      <div className="my-2 text-center">
        <button className="m-2 btn btn-outline-primary">Checkout</button>
        <button className="m-2 btn btn-outline-danger">Clear</button>
      </div>
    </div>
  );
}
