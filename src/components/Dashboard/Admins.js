import React from "react";

const Admins = ({ admin: { email, _id } }) => {
  const makeAdmin = (id) => {
    const data = { role: "admin" };
    fetch(`http://localhost:5000/alluser/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>
        {email}{" "}
        <button
          onClick={() => makeAdmin(_id)}
          className="btn btn-success btn-xs rounded-lg"
        >
          make admin
        </button>{" "}
        <button className="btn bg-red-700 btn-xs rounded-lg">delete</button>
      </h1>
    </div>
  );
};

export default Admins;
