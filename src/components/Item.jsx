import React from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";

const Item = ({ id, title, category, price, pictureUrl }) => {
  const navigate = useNavigate();

  return (
    <div className="card" data-id={id} onClick={() => navigate(`/item/${id}`)}>
      <h5 className="card-title">{title}</h5>
      <h6 className="text-muted">{category}</h6>
      <img className="card-img-top" src={pictureUrl} />
      <p className="card-text">{price}</p>
    </div>
  );
};

export default Item;
