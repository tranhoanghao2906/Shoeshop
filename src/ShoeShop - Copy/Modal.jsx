import React from "react";

const Modal = ({ content }) => {
  if (!content) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{content.name}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => window.location.reload()}
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={content.image}
              alt={content.name}
              className="img-fluid mb-3"
            />
            <p>Price: {content.price} $</p>
            <p>{content.description}</p>
            <p>Quantity: {content.quantity}</p>
            <p>{content.shortDescription}</p>

            <button className="btn btn-success mt-3"
             onClick={() => { onAddToCart(content);
                 onClose(); 
             }} > Thêm vào giỏ hàng </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;