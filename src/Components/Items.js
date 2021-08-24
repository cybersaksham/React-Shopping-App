import React from "react";

export default function Items({ items }) {
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
                <i className="bi bi-cart-plus-fill"></i>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
