// File Imports
import React, { useState } from "react";
import Inputs from "../../components/inputs/Inputs";
import img from "../../assets/img.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./auth.css";

const Login = () => {
  // useNavigate Hook
  const navigate = useNavigate();

  // Use state For Input Fields
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // OnChange Event For Input Box
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs((prevstate) => {
      return {
        ...prevstate,
        [name]: value,
      };
    });
  };

  // onClick Event For Login User
  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { email, password } = inputs;

      // Validation For All Fields
      if (!email || !password) {
        toast.success("Please Provide All Fields");
      }
      const { data } = await axios.post(`/user/login`, { email, password });
      toast.success(data && data.message);
      localStorage.setItem("user", JSON.stringify({ ...data, password: "" }));
      setLoading(false);
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <main className="wrapper">
      <section className="img-section">
        <img src={img} alt="user" />
      </section>
      <section className="form-section">
        <h1 className="heading h-login">Login</h1>
        {loading ? (
          "loading"
        ) : (
          <div className="input">
            <Inputs
              title="Email : "
              type="email"
              value={inputs.value}
              name="email"
              onChange={handleChange}
              placeholder="Enter Your Email"
              required={true}
            />
            <Inputs
              title="Password : "
              type="password"
              value={inputs.value}
              name="password"
              onChange={handleChange}
              placeholder="Enter Your Password"
              required={true}
            />
            <div className="btnBox">
              <button className="btn login" onClick={handleClick}>
                Login
              </button>
              <button
                className="btn register"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Not Registerd ? Please Registered
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Login;
