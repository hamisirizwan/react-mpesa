import React, { useState } from "react";
import axios from "axios";

window.Buffer = window.Buffer || require("buffer").Buffer;

function PayPage() {
  const [details, setDetails] = useState({
    phone: "",
    amount: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    // console.log(details);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validate inputs
    if (!details.amount || !details.phone) {
      return alert("enter all fields");
    }
    if (details.amount < 1) {
      return alert("enter valid amount");
    }
    if (details.phone.length !== 10) {
      return alert("invalid phone number");
    }
    if (
      details.phone.substring(0, 2) !== "07" &&
      details.phone.substring(0, 2) !== "01"
    ) {
      return alert("valid number should start with 07 or 01");
    }
    // //send request
    // alert(
    //   "STILL WORKING ON IT BE PATIENT 😋😋 \n Check tommorrow I should be through 🤩🤩"
    // );

    try {
      const key = "s0L1YFYzr4eGANAiVtmhPum9Us9pQnaT";
      const secret = "goca51EHNnZnQHOA";
      const auth = new Buffer.from(`${key}:${secret}`).toString("base64");

      const tokenData = await axios.get(
        "http://localhost:8080/https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", //sends the request through a proxy server
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Basic ${auth}`,
          },
        }
      );

      console.log(tokenData);
      console.log(tokenData.data.access_token); //get the access_token from daraja API
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="card p-4 mb-3">
      <p className="text fs-4 fw-normal text-center font-monospace">
        Give It A Try
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={details.phone}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount:</label>
          <input
            type="number"
            className="form-control"
            name="amount"
            value={details.amount}
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block btn-primary col-12">
          PAY
        </button>
      </form>
      <div className="mt-3">
        <p className="text fs-4 fw-normal">Need Help?</p>
        <p className="text fs-5 fw-light">Reach Out: 0768793923</p>
        <p className="text fs-5 fw-normal">
          GitHub Repo:{" "}
          <a
            href="https://github.com/hamisirizwan/react-mpesa"
            style={{ textDecoration: "none" }}
          >
            get code
          </a>
        </p>
      </div>
    </div>
  );
}

export default PayPage;
