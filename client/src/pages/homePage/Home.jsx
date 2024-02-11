// import React from "react";
// import { item } from "../../data/item";
// import { Link } from "react-router-dom";
// import "./home.css";
// const Home = () => {
//   return (
//     <main className="home-container">
//       {item?.map((data, index) => {
//         return (
//           <section key={index} className="box-item">
//             <Link className="link" to={data.path}>
//               <h1>{data.title}</h1>
//               <div className="icon">{data.icon}</div>
//               <h5>{data.subTitle}</h5>
//               <p>{data.para}</p>
//             </Link>
//           </section>
//         );
//       })}
//     </main>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { Modal, Select } from "antd";
import Inputs from "../../components/inputs/Inputs";
import axios from "axios";
import toast from "react-hot-toast";
const Home = () => {
  const [selectOptionBox, setSelectOptionBox] = useState("");
  const [inputs, setInputs] = useState({
    amount: "",
    category: "",
    description: "",
    date: "",
    type: "",
  });
  const [showModel, setShowModel] = useState(false);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs((prevstate) => {
      return {
        ...prevstate,
        [name]: value,
      };
    });
  };
  const handleClick = async (e) => {
    try {
      // const { amount, category, description, date, type } = inputs;
      // e.preventDefault();
      // const { data } = await axios.post(`/transection/add-transection`, {
      //   amount,
      //   category,
      //   description,
      //   date,
      //   type,
      // });
      // toast.success(data && data?.message);
      // console.log({ inputs });
      console.log({ selectOptionBox });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <section>
        <span>filters</span>
        <button onClick={() => setShowModel(!showModel)}>hello</button>
      </section>
      <section>
        <h1>contents</h1>
      </section>
      <Modal
        open={showModel}
        onCancel={() => {
          setShowModel(!showModel);
        }}
        footer={false}
      >
        <h1 className="heading h-register">Add Transection</h1>

        <div className="input">
          <Inputs
            title="Amount : "
            type="number"
            name="amount"
            value={inputs.value}
            onChange={handleChange}
            placeholder="Enter Amount"
            required={true}
          />
          <div
            style={{
              width: "80%",
              margin: "auto",
            }}
          >
            <label
              for="selectOptionBox"
              style={{
                fontSize: "1.8rem",
                color: "green",
                fontWeight: "600",
                // marginBottom: "1rem",
              }}
            >
              Type :
            </label>
            <select
              style={{
                width: "100%",
                marginTop: "1rem",
                height: "4rem",
                borderRadius: ".5rem",
                border: "2px solid #c9c8c8",
              }}
              onChange={(e) => setSelectOptionBox(e.target.value)}
            >
              <option value={selectOptionBox} name="income">
                Income
              </option>
              <option
                value={selectOptionBox}
                name="expense"
                onChange={(e) => setSelectOptionBox(e.target.value)}
              >
                Expense
              </option>
            </select>
          </div>

          <Inputs
            title="Category: "
            type="text"
            value={inputs.value}
            name="category"
            onChange={handleChange}
            required={true}
          />
          <Inputs
            title="Short Description: "
            type="text"
            value={inputs.value}
            name="description"
            onChange={handleChange}
            placeholder="Enter Transection Description"
            required={true}
          />
          <Inputs
            title="Date: "
            type="date"
            value={inputs.value}
            name="date"
            onChange={handleChange}
            required={true}
          />
          <div className="btnBox">
            <button className="btn register" onClick={handleClick}>
              Add Transection
            </button>
            {/* <button
                className="btn register"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Not Registerd ? Please Registered
              </button> */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Home;
