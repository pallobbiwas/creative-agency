import React, { useEffect, useState } from "react";
import Admins from "./Admins";

const Addadmin = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alluser", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      {user.map((p) => (
        <Admins key={p._id} admin={p}></Admins>
      ))}
    </div>
  );
};

export default Addadmin;
