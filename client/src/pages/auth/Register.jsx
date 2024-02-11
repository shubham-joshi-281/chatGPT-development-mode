// File Imports
import React, { useState } from "react";
import Inputs from "../../components/inputs/Inputs";
import img from "../../assets/img.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./auth.css";
const Register = () => {
  // useNavigate
  const navigate = useNavigate();
  // State for Input Fields
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  // Input Box Change
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs((prevstate) => {
      return {
        ...prevstate,
        [name]: value,
      };
    });
  };

  // Button Click
  const handleClick = async () => {
    try {
      setLoading(true);
      const { name, email, password } = inputs;

      // Validation Of All Fields
      if (!name || !email || !password) {
        toast.success("Please Provide All Fields");
      }

      // Registed Data
      const { data } = await axios.post(`/user/register`, {
        name,
        email,
        password,
      });
      toast.success(data && data.message);
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <main className="wrapper">
          <section className="img-section">
            <img src={img} alt="user" />
          </section>
          <section className="form-section">
            <h1 className="heading h-register">Register</h1>

            <div className="input">
              <Inputs
                title="Name : "
                type="text"
                value={inputs.value}
                name="name"
                onChange={handleChange}
                placeholder="Enter Your name"
                required={true}
              />
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
                <button className="btn register" onClick={handleClick}>
                  submit
                </button>
                <button
                  className="btn login"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  All Ready Registered? Please Login
                </button>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Register;
