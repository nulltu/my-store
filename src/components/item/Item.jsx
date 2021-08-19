import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import "./item.css";

function Item({ flag, name, id }) {
  
  return (
    <div className="col-2">
      <div className="card card-country">
        <img src={`${flag}`} className="card-img-top flag-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link to={`/item-detail/${id}`}>Ver mas</Link>
          <div className="d-grid gap-2">
            <Link to="/" className="btn btn-primary button-carrito">
              Agregar al carrito
            </Link>
            <ItemCount initial={1} stock={5}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
