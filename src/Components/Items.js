import { React, useState } from "react";

export default function Items({ items, showAlert }) {
  const [cart, setCart] = useState(
    JSON.parse(sessionStorage.getItem("cart")) || []
  );

  const handleCart = (e) => {
    let id__ = Number(e.target.getAttribute("value"));
    let cart__ = JSON.parse(sessionStorage.getItem("cart")) || [];
    let ind__ = cart__.indexOf(id__);
    if (ind__ === -1) {
      cart__.push(id__);
      showAlert("success", "Item added to cart");
    } else {
      cart__.splice(ind__, 1);
      showAlert("success", "Item removed from cart");
    }
    sessionStorage.setItem("cart", JSON.stringify(cart__));
    setCart(cart__);
  };

  return (
    <div className="container my-3">
      <ol className="list-group list-group">
        {items.map((item) => {
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
                    className={
                      cart.indexOf(item.id) === -1
                        ? "bi bi-cart-plus-fill"
                        : "bi bi-cart-dash-fill"
                    }
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
