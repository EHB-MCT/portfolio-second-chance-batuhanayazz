import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";
const CardFeature = ({ image, name, price, category, loading, id }) => {
const dispatch = useDispatch();

  // when the user clicks the button to add the product to the cart
const handleAddCartProduct = (e) => {
  // dispatch an action to add the product to the cart
  dispatch(
    addCartItem({
      _id: id,
      name: name,
      price: price,
      category: category,
      image: image,
    })
  );
};

  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col ">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={image} className="h-full" alt="" />
            </div>
            <h3 className="font-semibold text-secondary  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className=" text-secondary   font-medium">{category}</p>
            <p className=" font-bold text-primary">
              <span>{price}</span>
              <span className="text-primary  ml-1">€</span>
            </p>
          </Link>
          <button
            className="bg-secondary py-1 mt-2 rounded hover:bg-primary w-full text-white"
            onClick={handleAddCartProduct}
          >
            Add Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
