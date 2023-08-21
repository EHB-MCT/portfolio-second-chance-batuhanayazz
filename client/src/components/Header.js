import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { logoutRedux } from "../redux/userSlice";

const Header = () => {
  //set state for menu
  const [showMenu, setShowMenu] = useState(false);
  //profile picture when user login
  const userData = useSelector((state) => state.user);
  //
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //handle show/hide menu
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  //handle logout
  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
    if ("Logout successfully") {
      navigate("/");
    }
  };
  const cartItemNumber = useSelector((state) => state.product.cartItem);
  return (
    <header className="fixed shadow-md w-full h-50 px-2 md:px-4 z-50 bg-white">
      {/* Desktop and Mobile Friendly*/}
      <Link to={""}></Link>
      <div className="flex items-center h-full justify-between">
        <div className="h-20">
          <img src={Logo} alt="logo" className="h-full" />
        </div>
        {/* NAVBAR */}
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg text-secondary font-semibold">
            <Link to={""}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="text-2xl text-primary relative cursor-pointer">
            <Link to={"cart"}>
              <FaCartPlus />
              <div className="absolute -top-2 -right-2 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div className="text-primary cursor-pointer" onClick={handleShowMenu}>
            <div className="text-2xl">
              {userData?.image ? (
                <img
                  src={userData?.image}
                  alt="user"
                  className="h-8 w-8 rounded-full"
                />
              ) : (
                <FaUserAlt color="#0096D6" />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow-md flex flex-col">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer px-3"
                  >
                    New product
                  </Link>
                )}
                {userData.image ? (
                  <>
                    <p
                      className="cursor-pointer text-secondary px-3"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer"
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
