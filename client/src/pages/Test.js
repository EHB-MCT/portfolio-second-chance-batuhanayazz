import React from "react";
import { useSelector } from "react-redux";

function Test() {
  //Product data from redux
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);

  return <div className="mt-5">TEST</div>;
}

export default Test;
