import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import AllProduct from "../components/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);

  return (
    <>
      <div className="p-2 md:p-4">
        <div className="md:flex py-2 justify-center flex flex-wrap items-center text-center mt-3">
          <div className="md:w-1/2 gap-5 justify-center flex flex-wrap items-center text-center">
            <div className="grid gap-4 grid-cols-3 ">
              <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
                <p className="text-sm font-medium text-slate-900">
                  Bike Delivery
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
                  className="h-7"
                  alt=""
                />
              </div>
              <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
                <p className="text-sm font-medium text-slate-900">
                  Car Delivery
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
                  className="h-7"
                  alt=""
                />
              </div>
              <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
                <p className="text-sm font-medium text-slate-900">
                  Bike Delivery
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
                  className="h-7"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold py-3">
              The Fastest Delivery to{" "}
              <span className="text-primary">Your Home</span>
            </h2>
            <p className="py-3 text-base ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </div>
        </div>

        <AllProduct />
      </div>
    </>
  );
};

export default Home;
