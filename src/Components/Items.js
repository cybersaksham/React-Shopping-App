import React from "react";

export default function Items({ items, setItems }) {
  const handleCart = (e) => {
    let item = JSON.parse(e.target.getAttribute("value"));
    let ind__ = items.indexOf(item);
    let newItem__ = item;
    newItem__.cart = !item.cart;
    let newItems__ = items;
    newItems__[ind__] = newItem__;
    setItems(newItems__);
    sessionStorage.setItem("items", JSON.stringify(newItems__));
  };

  return (
    <div className="container my-3">
      <ol className="list-group list-group">
        {items.map((item) => (
          <li
            key={`${item.title} - ${item.desc} - ${item.price}`}
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
                  value={JSON.stringify(item)}
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
