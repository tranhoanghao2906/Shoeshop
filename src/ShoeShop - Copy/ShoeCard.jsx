import React from "react";

const ShoeCard = (props) => {
    console.log("props: ", props);

    const { detail, onViewDetail } = props;
    return (
        <div className="card">
            <img src={detail.image} className="card-img-top" alt="..." />
            <div className="card-body text-start">
                <h5 className="card-title">{detail.name}</h5>
                <p className="card-text">{detail.price} $</p>
                <button
                    className="btn btn-primary me-2"
                    onClick={() => onViewDetail(detail)}
                >
                    View Detail
                </button>
                <a href="#" className="btn btn-dark" style={{borderRadius:0}}>
                    add to cart
                    <i className="fa-solid fa-cart-plus" />

                </a>
            </div>
        </div>
    );
};

export default ShoeCard;
