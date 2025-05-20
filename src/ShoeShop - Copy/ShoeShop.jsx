import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import Modal from "./Modal";

const ShoesShop = () => {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    axios
      .get("https://68244cc765ba05803399afd2.mockapi.io/api/shoe/shoe")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        // console.error("Lỗi API:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center mt-4">Shoes Shop</h1>
      <ProductList
        productsData={products}
        setStateModal={setProductDetail}
      />
      <Modal content={productDetail} />
    </div>
  );
};

export default ShoesShop;