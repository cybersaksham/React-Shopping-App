import React from "react";

export default function Items({ items }) {
  return (
    <div className="container my-3">
      {items.map((item) => (
        <p key={`${item.title} - ${item.desc}`}>{item.title}</p>
      ))}
    </div>
  );
}
