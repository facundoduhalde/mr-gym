import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => (
  <div className="row">
    {items.map((item, index) => (
      <Item
        key={"ItemList" + index}
        id={item.id}
        title={item.title}
        category={item.category}
        image={item.image}
        price={item.price}
      />
    ))}
  </div>
);

export default ItemList;
