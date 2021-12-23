import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => (
  <div className="row">
    {items.map((item) => (
      <Item
        key={"Item" + item.id}
        id={item.id}
        title={item.title}
        category={item.category}
        pictureUrl={item.pictureUrl}
        price={item.price}
      />
    ))}
  </div>
);

export default ItemList;
