import React, { useState } from "react";
import loginSignupImage from "../assets/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRedux } from "../redux/userSlice";

function Login() {
  /* 
1. I am creating a new variable called name and value.
2. I am using the spread operator to get the data and then I am changing the value of the name that is passed to the function.
3. I am returning the data, but I am changing the value of name that is passed.
4. I am using the useState hook to update the data. 
*/

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  // This code is used to handle form submission.
  //It checks if the user has entered all required fields, and if so, it checks if the password and confirm password fields match. If they do, it calls the function handleSubmit.
  //If they do not, it alerts the user that the password and confirm password fields do not match.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const dataRes = await fetchData.json();
      console.log(dataRes);

      toast(dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } else {
      alert("Please Enter required fields");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img
            src={loginSignupImage}
            className="w-full h-full"
            alt="loginSignupImage"
          />
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button className="w-full max-w-[150px] m-auto  bg-secondary hover:bg-primary cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Login
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Do you need Account ?{" "}
          <Link to={"/signUp"} className="text-secondary underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
