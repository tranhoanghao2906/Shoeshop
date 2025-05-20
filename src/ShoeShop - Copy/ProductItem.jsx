import React from "react";

const ProductItem = ({ item, setStateModal }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={item.image}
          className="card-img-top"
          alt={item.name}
          style={{ height: "300px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price} $</p>
          <button
            className="btn btn-dark w-100"
            onClick={() => setStateModal(item)}
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
