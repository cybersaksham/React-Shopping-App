import React from "react";

export default function Items({ items, setItems }) {
  const handleCart = (e) => {
    let id__ = Number(e.target.getAttribute("value"));
    let cart__ = JSON.parse(sessionStorage.getItem("cart")) || [];
    let ind__ = cart__.indexOf(id__);
    if (ind__ === -1) cart__.push(id__);
    else cart__.splice(ind__, 1);
    setItems(items);
    sessionStorage.setItem("cart", JSON.stringify(cart__));
  };

  return (
    <div className="container my-3">
      <ol className="list-group list-group">
        {items.map((item) => (
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
                  className="bi bi-cart-plus-fill"
                ></i>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
